import { useState, useEffect } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { questions } from './data/questions';
import { submitTest, getUserStats } from './api';

function App() {
  const [age, setAge] = useState<number | null>(null);
  const [iqScore, setIqScore] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [userCount, setUserCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleComplete = async () => {
    if (age !== null) {
      setLoading(true);
      try {
        const result = await submitTest({ age: age, answers: answers });
        setIqScore(result.iqScore);
        setTestCompleted(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAnswerSubmit = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setQuestionIndex(questionIndex + 1);
  }

  useEffect(() => {
    const fetchUserStats = async () => {
      setLoading(true);
      try {
        const stats = await getUserStats();
        setUserCount(stats.userCount);
      } finally {
        setLoading(false);
      }
    };

    fetchUserStats();
  }, []);

  return (
    <div className="container min-h-screen py-12 mx-auto">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}
      {testCompleted && iqScore && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-purple-700">Your IQ Score: {iqScore}</p>
        </div>
      )}

      {!age && (
        <div className="max-w-sm mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your age to begin
          </label>
          <div className="flex">
            <input
              type="number"
              min="5"
              max="120"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setAge(parseInt((e.target as HTMLInputElement).value));
                }
              }}
            />
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={(e) => {
                const ageInput = (e.target as HTMLButtonElement).parentElement?.querySelector('input') as HTMLInputElement;
                setAge(parseInt(ageInput.value));
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {age && questionIndex < questions.length && (
        <QuestionCard
          question={questions[questionIndex]}
          onAnswer={handleAnswerSubmit}
        />
      )}

      {age && questionIndex === questions.length && !testCompleted && (
        <div className="text-center">
          <button
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleComplete}
          >
            Complete Test
          </button>
        </div>
      )}

      {/* User Statistics */}
      <div className="mt-6 text-center">
        <p className="text-sm text-purple-500">
          <span className="font-semibold">{userCount}</span> users have taken the test in the last 24 hours.
        </p>
      </div>

      <div className="mt-6 text-center">
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => alert('Premium features are not available locally.')}
        >
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
}

export default App;
