import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // fake database here
  private users: User[] = [{ id: 0, username: 'alice' }];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: number): User {
    const currentUser = this.users.find((user) => user.id === userId);
    if (currentUser) {
      return currentUser;
    }
    throw new Error('Could not find user with matching id');
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);
    return newUser;
  }
}
