import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Pelicula } from '../../peliculas/entities/pelicula.entity';

@Entity('calificaciones')
export class Calificacion {
  @PrimaryGeneratedColumn()
  calificacion_id: number;

  @Column({ type: 'int' })
  calificacion: number; // CHECK (calificacion BETWEEN 1 AND 5)

  @ManyToOne(() => Usuario, (usuario) => usuario.calificaciones, {
    onDelete: 'CASCADE', // Borra las calificaciones si el usuario se elimina
  })
  usuario: Usuario;

  @ManyToOne(() => Pelicula, (pelicula) => pelicula.calificaciones, {
    onDelete: 'CASCADE', // Borra las calificaciones si la película se elimina
  })
  pelicula: Pelicula;
}
