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
  },
  {
    id: 4,
    text: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
    type: "general",
    difficulty: 1
  },
  {
    id: 5,
    text: "Solve for x: 2x + 5 = 15",
    options: ["5", "10", "20", "25"],
    correctAnswer: "5",
    type: "mathematical",
    difficulty: 2
  },
  {
    id: 6,
    text: "Which of the following is a prime number?",
    options: ["4", "6", "8", "7"],
    correctAnswer: "7",
    type: "mathematical",
    difficulty: 1
  },
  {
    id: 7,
    text: "Complete the analogy: Dog is to bark as Cat is to...",
    options: ["Meow", "Woof", "Hiss", "Purr"],
    correctAnswer: "Meow",
    type: "verbal",
    difficulty: 1
  },
  {
    id: 8,
    text: "What is the opposite of 'benevolent'?",
    options: ["Malevolent", "Kind", "Friendly", "Helpful"],
    correctAnswer: "Malevolent",
    type: "verbal",
    difficulty: 2
  },
  {
    id: 9,
    text: "If you rearrange the letters 'OTSE', you get the name of a...",
    options: ["City", "River", "Ocean", "Country"],
    correctAnswer: "City",
    type: "verbal",
    difficulty: 3
  },
  {
    id: 10,
    text: "Which of these is not a type of cloud?",
    options: ["Cirrus", "Cumulus", "Nimbus", "Strawberry"],
    correctAnswer: "Strawberry",
    type: "general",
    difficulty: 1
  }
];
