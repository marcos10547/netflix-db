/* eslint-disable prettier/prettier */
import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
  nombre: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  @MaxLength(150, { message: 'El correo no puede tener más de 150 caracteres' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(50, { message: 'La contraseña no puede tener más de 50 caracteres' })
  password: string; // Validación de longitud mínima y máxima
}
