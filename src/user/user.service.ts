import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserServices {
  constructor(private userRepository: UserRepository) {}

  getUsers() {
    return this.userRepository.getUsers();
  }
}
