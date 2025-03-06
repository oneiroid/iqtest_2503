import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "What number should come next in this sequence: 2, 4, 8, 16, ...",
    options: ["24", "32", "30", "28"],
    correctAnswer: "32",
    type: "logical",
    difficulty: 1
  },
  {
    id: 2,
    text: "If all roses are flowers, and some flowers are red, then...",
    options: [
      "All roses are red",
      "Some roses might be red",
      "No roses are red",
      "All flowers are roses"
    ],
    correctAnswer: "Some roses might be red",
    type: "logical",
    difficulty: 2
  },
  {
    id: 3,
    text: "Which shape completes the pattern?",
    options: ["Square", "Triangle", "Circle", "Pentagon"],
    correctAnswer: "Triangle",
    type: "spatial",
    difficulty: 1
  }
];
