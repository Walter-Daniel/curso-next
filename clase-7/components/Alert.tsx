import { FC } from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}

export const Alert: FC<AlertProps> = ({ message, type, onClose }) => {
  let bgColor;

  switch (type) {
    case 'success':
      bgColor = 'bg-green-100 border-green-400 text-green-700';
      break;
    case 'error':
      bgColor = 'bg-red-100 border-red-400 text-red-700';
      break;
    case 'warning':
      bgColor = 'bg-yellow-100 border-yellow-400 text-yellow-700';
      break;
    case 'info':
      bgColor = 'bg-blue-100 border-blue-400 text-blue-700';
      break;
    default:
      bgColor = 'bg-gray-100 border-gray-400 text-gray-700';
  }

  return (
    <div className={`border-l-4 p-4 ${bgColor} mb-4`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-bold">×</button>
      </div>
    </div>
  );
};

