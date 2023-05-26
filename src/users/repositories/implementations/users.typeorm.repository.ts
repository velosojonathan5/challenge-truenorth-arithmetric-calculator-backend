import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository.interface';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTypeorm } from './user.typeorm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersTypeormRepository implements UserRepository {
  constructor(
    @InjectRepository(UserTypeorm)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(user);
  }

  findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }
}
