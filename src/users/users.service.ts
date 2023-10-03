import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository} from 'typeorm'
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ){

  }
  create(createUserDto: CreateUserDto) {
    this.usersRepository.save([createUserDto])
    return 'Creado exitoxamente'
  }

  findAll() {
    return this.usersRepository.find();

  }

  findBy(id: number) {
    return this.usersRepository.findBy({id:id})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.usersRepository.update(id, updateUserDto)
    return 'cargador exitoxamente'
  }

  remove(id: number) {
    this.usersRepository.delete(id);
    return 'eliminado exitoxamente'
  }
}
