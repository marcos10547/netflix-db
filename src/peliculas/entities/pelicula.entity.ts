import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Calificacion } from '../../calificaciones/entities/calificacione.entity';

@Entity('peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn()
  pelicula_id: number;

  @Column({ type: 'varchar', length: 200 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'int', nullable: true })
  anio_lanzamiento: number;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.pelicula, {
    cascade: true,
  })
  calificaciones: Calificacion[];
}
