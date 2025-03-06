import { questions } from './data/questions';

interface SubmitTestRequest {
  age: number;
  answers: string[];
}

interface SubmitTestResponse {
  iqScore: number;
}

interface UserStatsResponse {
  userCount: number;
}

interface PremiumRelativeStandingResponse {
  relativeStanding: string;
}

interface PremiumGlobalPercentileResponse {
  globalPercentile: number;
}

// Placeholder function for submitting test results
export const submitTest = async (
  request: SubmitTestRequest
): Promise<SubmitTestResponse> => {
  // Simulate calculating IQ score based on age and answers
  const correctCount = request.answers.filter((answer, index) => {
    return answer === questions[index].correctAnswer;
  }).length;

  const baseScore = 80;
  const pointsPerQuestion = 10;
  const ageBonus = request.age ? Math.min(20, request.age * 0.5) : 0;

  const iqScore = baseScore + correctCount * pointsPerQuestion + ageBonus;

  return { iqScore };
};

// Placeholder function for fetching user statistics
export const getUserStats = async (): Promise<UserStatsResponse> => {
  // Simulate fetching user count from backend
  return { userCount: 5000 };
};

// Placeholder function for fetching premium relative standing
export const getPremiumRelativeStanding = async (): Promise<PremiumRelativeStandingResponse> => {
  // Simulate fetching relative standing from backend
  return { relativeStanding: 'Above Average' };
};

// Placeholder function for fetching premium global percentile
export const getPremiumGlobalPercentile = async (): Promise<PremiumGlobalPercentileResponse> => {
  // Simulate fetching global percentile from backend
  return { globalPercentile: 75 };
};
