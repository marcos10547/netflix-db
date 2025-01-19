// create-calificacione.dto.ts
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCalificacionDto {
  @IsInt()
  @IsNotEmpty()
  usuario_id: number;

  @IsInt()
  @IsNotEmpty()
  pelicula_id: number;

  @IsInt()
  calificacion: number;
}
