import { test, expect } from '@playwright/test';

test.describe('AI Accord Quiz End-to-End Test', () => {
  test('complete quiz flow with all validations', async ({ page }) => {
    // Launch the application at the root URL where the quiz is hosted
    await page.goto('http://localhost:3000/');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check that we have the quiz title
    await expect(page.locator('h1:has-text("AI Compatibility Quiz")')).toBeVisible();

    // Test each of the 6 questions
    for (let questionNum = 1; questionNum <= 6; questionNum++) {
      // Verify we're on the correct question
      await expect(page.locator(`h2:has-text("Question ${questionNum} of 6")`)).toBeVisible();
      
      // Assert that the image matches the expected pattern
      const imgElement = await page.locator('img[alt="Question image"]');
      await expect(imgElement).toBeVisible();
      
      const imgSrc = await imgElement.getAttribute('src');
      expect(imgSrc).toContain(`q${questionNum}`);
      
      console.log(`Verified question ${questionNum} image`);
      
      // Click the first answer option
      await page.locator('.option-button').first().click();
      
      // Click the Next/Submit button
      const buttonText = questionNum < 6 ? 'Next Question' : 'See Results';
      await page.getByRole('button', { name: buttonText }).click();
      
      // Wait for navigation or state change
      if (questionNum < 6) {
        await expect(page.locator(`h2:has-text("Question ${questionNum + 1} of 6")`)).toBeVisible();
      }
    }
    
    // On the results screen
    // 1. Verify the personality type text appears
    await expect(page.locator('h2:has-text("Your AI Compatibility Profile")')).toBeVisible();
    const resultsHeading = await page.locator('h3.text-3xl.font-bold');
    await expect(resultsHeading).toBeVisible();
    
    // Check if the personality type is one of the expected types
    const personalityText = await resultsHeading.textContent();
    
    const expectedTypes = [
      'Cautious Collaborator',
      'Balanced Mediator',
      'Trusting Optimist',
      'Independent Thinker'
    ];
    
    let typeFound = false;
    for (const type of expectedTypes) {
      if (personalityText && personalityText.includes(type)) {
        typeFound = true;
        break;
      }
    }
    
    expect(typeFound).toBeTruthy();
    console.log(`Verified personality type: ${personalityText}`);
    
    // Check that the answers section is shown
    await expect(page.locator('text="Your Answers"')).toBeVisible();
    
    // Verify that all 6 answers are displayed
    const answerElements = await page.locator('text="Your answer:"').all();
    expect(answerElements.length).toBe(6);
    
    // Click the Restart button
    await page.getByRole('button', { name: 'Retake Quiz' }).click();
    
    // Verify we're back at the first question and no answers are selected
    await expect(page.locator('h2:has-text("Question 1 of 6")')).toBeVisible();
    const selectedOptions = await page.locator('.option-button[aria-pressed="true"]').count();
    expect(selectedOptions).toBe(0);
    
    console.log('Successfully restarted quiz');
  });
});