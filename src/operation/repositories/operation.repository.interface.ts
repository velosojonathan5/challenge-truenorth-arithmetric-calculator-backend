import { Operation, OperationType } from '../entities/operation.entity';

export interface OperationRepository {
  findByType(type: OperationType): Promise<Operation>;
}

export const OPERATIONS_REPOSITORY_TOKEN = 'operations-repository-token';
