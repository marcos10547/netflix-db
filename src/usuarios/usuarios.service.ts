/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  // Método de registro
  async register(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { email, password, nombre } = createUsuarioDto;

    // Comprobar si el usuario ya existe
    const userExists = await this.usuariosRepository.findOne({ where: { email } });
    if (userExists) {
      throw new HttpException('El usuario ya existe', HttpStatus.BAD_REQUEST);
    }

    // Crear el nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usuariosRepository.create({
      nombre,
      email,
      password: hashedPassword,
    });

    return this.usuariosRepository.save(newUser);
  }

  // Método de login
  async login(loginUsuarioDto: LoginUsuarioDto): Promise<string> {
    const { email, password } = loginUsuarioDto;

    // Verificar si el usuario existe
    const user = await this.usuariosRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new HttpException('Contraseña incorrecta', HttpStatus.UNAUTHORIZED);
    }

    return 'Inicio de sesión exitoso'; 
  }
}
