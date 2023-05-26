import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import {
  USERS_REPOSITORY_TOKEN,
  UserRepository,
} from './repositories/users.repository.interface';
import { User, UserStatus } from './entities/user.entity';
import { RecordService } from '../record/record.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY_TOKEN) private userRepository: UserRepository,
    private recordService: RecordService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExists = await this.findOneByUsername(createUserDto.username);

    if (userExists) {
      throw new ConflictException();
    }

    createUserDto.password = await this.hashPassword(createUserDto.password);

    createUserDto.status = UserStatus.ACTIVE;

    const user = await this.userRepository.create(createUserDto);
    await this.recordService.create({
      amount: 0,
      operationId: 1,
      userId: user.id,
      userBalance: 100,
      operationResponse: 'ok',
    });

    user.password = undefined;

    return user;
  }

  findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneByUsername(username);
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async compareHashPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
