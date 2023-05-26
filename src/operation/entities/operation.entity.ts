import axios from 'axios';

const RANDOM_STRING_URL = `https://www.random.org/integers/?num=1&min=1&max=200&col=1&base=10&format=plain&rnd=new`;

export enum OperationType {
  ADDITION = 'ADDITION',
  SUBTRACTION = 'SUBTRACTION',
  MULTIPLICATION = 'MULTIPLICATION',
  DIVISION = 'DIVISION',
  SQUARE_ROOT = 'SQUARE_ROOT',
  RANDOM_STRING_GENERATION = 'RANDOM_STRING_GENERATION',
}

export const operations = [
  {
    type: OperationType.ADDITION,
    calculate: (a: number, b: number) => a + b,
  },
  {
    type: OperationType.SUBTRACTION,
    calculate: (a: number, b: number) => a - b,
  },
  {
    type: OperationType.MULTIPLICATION,
    calculate: (a: number, b: number) => a * b,
  },
  {
    type: OperationType.DIVISION,
    calculate: (a: number, b: number) => a / b,
  },
  {
    type: OperationType.SQUARE_ROOT,
    calculate: (a: number) => Math.sqrt(a),
  },
  {
    type: OperationType.RANDOM_STRING_GENERATION,
    calculate: async () => {
      const response = await axios.get(RANDOM_STRING_URL);
      return response.data;
    },
  },
];

export class Operation {
  id: number;
  type: OperationType;
  cost: number;
}
