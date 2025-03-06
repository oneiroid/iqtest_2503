import { useState, useEffect } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { questions } from './data/questions';
import type { TestResult } from './types';

function App() {
  const [age, setAge] = useState<number | null>(null);
  const [iqScore, setIqScore] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [userCount, setUserCount] = useState<number>(0); // Placeholder for user count

  useEffect(() => {
    // Load saved progress from local storage, but only if age is already entered
    const savedAge = localStorage.getItem('age');
    if (savedAge) {
      setAge(parseInt(savedAge));
      const savedQuestionIndex = localStorage.getItem('questionIndex');
      const savedAnswers = localStorage.getItem('answers');

      if (savedQuestionIndex) {
        setQuestionIndex(parseInt(savedQuestionIndex));
      }
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
    }
  }, []);

  useEffect(() => {
    // Save progress to local storage
    localStorage.setItem('age', String(age || ''));
    localStorage.setItem('questionIndex', String(questionIndex));
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [age, questionIndex, answers]);

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value));
  };

  const handleAnswerSubmit = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setQuestionIndex(questionIndex + 1);
  };

  const calculateIqScore = (): TestResult => {
    const correctCount = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    const baseScore = 80;
    const pointsPerQuestion = 10;
    const ageBonus = age ? Math.min(20, age * 0.5) : 0;
    
    return {
      iqScore: baseScore + (correctCount * pointsPerQuestion) + ageBonus,
      timeSpent: 0, // TODO: Implement timer
      correctAnswers: correctCount,
      totalQuestions: questions.length
    };
  };

  const handleComplete = () => {
    const result = calculateIqScore();
    setIqScore(result.iqScore);
    setTestCompleted(true);
  };

  useEffect(() => {
    // Simulate fetching user count from backend
    setTimeout(() => {
      setUserCount(1234);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12"> {/* Improved background */}
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              IQ Test
            </h1>

            {!age && (
              <div className="max-w-sm mx-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your age to begin
                </label>
                <input
                  type="number"
                  min="5"
                  max="120"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleAgeChange}
                />
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
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleComplete}
                >
                  Complete Test
                </button>
              </div>
            )}

            {testCompleted && iqScore && (
              <Results iqScore={iqScore} />
            )}

            {/* User Statistics */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">{userCount}</span> users have taken the test in the last 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Results({ iqScore }: { iqScore: number }) {
  return (
    <div className="mt-6 text-center">
      <p className="text-lg font-semibold text-gray-700">Your IQ Score: {iqScore}</p>
      <p className="text-sm text-gray-500">
        Want to know your relative standing and global percentile?
        <a href="#" className="text-blue-500 hover:text-blue-700 ml-1">
          Upgrade to Premium
        </a>
      </p>
    </div>
  );
}

export default App;
