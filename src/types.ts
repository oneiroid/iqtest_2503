export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  type: 'logical' | 'mathematical' | 'verbal' | 'spatial' | 'general';
  difficulty: 1 | 2 | 3;
}

export interface TestResult {
  iqScore: number;
  timeSpent: number;
  correctAnswers: number;
  totalQuestions: number;
}
