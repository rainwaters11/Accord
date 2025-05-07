import React from 'react';
import Image from 'next/image';
import OptionButton from './OptionButton';

export interface QuizQuestionType {
  id: number;
  question: string;
  options: string[];
  prompt: string;
  image?: string;
}

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentQuestionNumber: number;
  totalQuestions: number;
  selectedOption: number | null;
  onOptionClick: (index: number) => void;
  onSubmit: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentQuestionNumber,
  totalQuestions,
  selectedOption,
  onOptionClick,
  onSubmit
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {question.image && (
          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src={question.image}
              alt="Question image"
              className="rounded-lg object-cover"
              fill={true}
              priority
            />
          </div>
        )}
        <div className={question.image ? 'w-full md:w-1/2' : 'w-full'}>
          <div className="bg-neon-blue bg-opacity-20 text-neon-blue px-4 py-2 rounded-lg mb-4 font-semibold">
            {question.prompt}
          </div>
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestionNumber} of {totalQuestions}
          </h2>
          <p className="text-lg mb-6">{question.question}</p>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <OptionButton
                key={index}
                isSelected={selectedOption === index}
                onClick={() => onOptionClick(index)}
              >
                {option}
              </OptionButton>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button
          onClick={onSubmit}
          disabled={selectedOption === null}
          className={`btn-primary ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {currentQuestionNumber < totalQuestions ? 'Next Question' : 'See Results'}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;