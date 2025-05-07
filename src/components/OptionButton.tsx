import React from 'react';

interface OptionButtonProps {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  isSelected,
  onClick,
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={`option-btn ${
        isSelected ? 'option-btn-selected' : 'option-btn-default'
      }`}
    >
      {children}
    </button>
  );
};

export default OptionButton;