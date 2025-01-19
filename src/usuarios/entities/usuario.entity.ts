/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Calificacion } from '../../calificaciones/entities/calificacione.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  usuario_id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string; // Nueva columna para contraseñas encriptadas

  @OneToMany(() => Calificacion, (calificacion) => calificacion.usuario, {
    cascade: true, // Opcional: Propaga operaciones como save/remove
  })
  calificaciones: Calificacion[];
}
