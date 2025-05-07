import React from 'react';
import { QuizQuestionType } from './QuizQuestion';

interface QuizResultProps {
  personalityType: string;
  answers: number[];
  questions: QuizQuestionType[];
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  personalityType,
  answers,
  questions,
  onRestart
}) => {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold">Your AI Compatibility Profile</h2>
      <div className="bg-gradient-to-r from-neon-blue to-neon-purple bg-opacity-20 p-8 rounded-xl shadow-neon">
        <h3 className="text-3xl font-bold text-neon-blue mb-4">{personalityType}</h3>
        <p className="text-lg">
          Based on your answers, we've determined your AI interaction style.
          This represents how you might approach working with and trusting artificial intelligence.
        </p>
      </div>
      
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-bold">Your Answers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((question, index) => (
            <div key={index} className="card">
              <h4 className="font-medium">{question.prompt}</h4>
              <p className="text-sm text-gray-600 mt-1">{question.question}</p>
              {answers[index] !== undefined && (
                <p className="mt-2 font-medium text-neon-blue">
                  Your answer: {question.options[answers[index]]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <button
          onClick={onRestart}
          className="btn-secondary"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResult;