import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export interface UserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;

  findOneByUsername(username: string): Promise<User | null>;
}

export const USERS_REPOSITORY_TOKEN = 'users-repository-token';
