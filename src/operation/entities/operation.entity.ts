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
];

export class Operation {
  id: number;
  type: OperationType;
  cost: number;
}
