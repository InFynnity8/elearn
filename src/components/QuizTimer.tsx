import { useState, useEffect } from "react";
import { IoIosAlarm } from "react-icons/io";

const QuizTimer = ({ duration, onTimeUp }: { duration: number; onTimeUp: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Call the function when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return <div className="font-medium text-[20px] text-green-500 flex items-center"> <IoIosAlarm size={20} className="mr-1"/> {Math.floor(timeLeft/60)} min {timeLeft%60}s </div>;
};

export default QuizTimer