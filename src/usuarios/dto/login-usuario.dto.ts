/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';

export class LoginUsuarioDto {
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;

  @IsString({ message: 'La contraseña es obligatoria' })
  password: string;
}
