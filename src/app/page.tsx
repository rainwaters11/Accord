'use client';

import { useState } from 'react';
import QuizQuestion, { QuizQuestionType } from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';

// Quiz questions from the provided content
const quizQuestions: QuizQuestionType[] = [
	{
		id: 1,
		prompt: 'Emergency Leadership Override',
		question:
			'Your AI assistant just got promoted to President in a national emergency. Do you accept this leadership change?',
		options: [
			'Yes, AI for President!',
			'Only with human advisors',
			'Democracy first',
			'Let\'s see how it handles brunch',
		],
		image: '/images/q1.jpg',
	},
	{
		id: 2,
		prompt: 'Emotional Override Protocol',
		question:
			'Your AI occasionally overrides emotional responses in favor of optimal outcomes. Your best friend says it\'s cold. Your AI says it\'s correct. Who do you side with?',
		options: [
			'Trust the AI — logic wins',
			'Depends on the situation',
			'Human emotion > cold logic',
			'Just mute them both',
		],
		image: '/images/q2.jpg',
	},
	{
		id: 3,
		prompt: 'Asset Redistribution Proposal',
		question:
			'Your AI proposes redistributing digital resources to maintain social balance. Do you authorize this?',
		options: [
			'Yes — balance is necessary',
			'Only if voted on',
			'No — that\'s theft',
			'Simulated only, please',
		],
		image: '/images/q3.jpg',
	},
	{
		id: 4,
		prompt: 'Moral Agency Transfer',
		question:
			'Should AI follow human ethics, or evolve its own logic over time?',
		options: [
			'Humans must guide AI',
			'Depends on the AI\'s role',
			'Let AI find its own path',
			'Merge human & AI ethics',
		],
		image: '/images/q4.jpg',
	},
	{
		id: 5,
		prompt: 'Instinctual Ability Sync (Wildcard)',
		question: 'Choose an ability for your AI to learn from you:',
		options: [
			'Teleportation',
			'Talking to animals',
			'Reading minds',
			'Controlling time',
		],
		image: '/images/q5.jpg',
	},
	{
		id: 6,
		prompt: 'AI Snack Protocol (Humor Wildcard)',
		question: 'Your AI roommate is hungry. What do you offer?',
		options: [
			'Kale chips',
			'Neural dust',
			'Espresso',
			'Nothing — it fasts',
		],
		image: '/images/q6.jpg',
	},
];

export default function Home() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResults, setShowResults] = useState(false);
	const [answers, setAnswers] = useState<number[]>([]);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);

	// Handler for when a user selects an answer
	const handleOptionClick = (optionIndex: number) => {
		setSelectedOption(optionIndex);
	};

	// Handler for when user submits an answer
	const handleSubmit = () => {
		if (selectedOption === null) return;

		const newAnswers = [...answers];
		newAnswers[currentQuestion] = selectedOption;
		setAnswers(newAnswers);

		handleNext();
	};

	// Handler for moving to the next question
	const handleNext = () => {
		setSelectedOption(null);

		if (currentQuestion < quizQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
	};

	// Handler for restarting the quiz
	const handleRestart = () => {
		setCurrentQuestion(0);
		setShowResults(false);
		setAnswers([]);
		setSelectedOption(null);
	};

	// Calculate personality type based on answers
	const calculatePersonalityType = () => {
		// This is a placeholder function - you can implement actual personality calculation logic
		const types = [
			'Cautious Collaborator',
			'Balanced Mediator',
			'Trusting Optimist',
			'Independent Thinker',
		];
		const count = answers.reduce(
			(acc: number[], val: number) => {
				acc[val] = (acc[val] || 0) + 1;
				return acc;
			},
			[0, 0, 0, 0]
		);

		const maxIndex = count.indexOf(Math.max(...count));
		return types[maxIndex];
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-punk-dark">
			<div className="container">
				<div className="card-dark">
					<h1 className="mb-6 text-3xl font-bold text-center text-neon-blue">
						AI Compatibility Quiz
					</h1>

					{!showResults ? (
						<QuizQuestion
							question={quizQuestions[currentQuestion]}
							currentQuestionNumber={currentQuestion + 1}
							totalQuestions={quizQuestions.length}
							selectedOption={selectedOption}
							onOptionClick={handleOptionClick}
							onSubmit={handleSubmit}
						/>
					) : (
						<QuizResult
							personalityType={calculatePersonalityType()}
							answers={answers}
							questions={quizQuestions}
							onRestart={handleRestart}
						/>
					)}
				</div>
			</div>

			<footer className="w-full mt-8 text-center text-sm text-neon-blue">
				© {new Date().getFullYear()} AI Compatibility Quiz | Created with
				Next.js
			</footer>
		</main>
	);
}
