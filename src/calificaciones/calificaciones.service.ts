import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';

@Injectable()
export class CalificacionesService {
  constructor(
    @InjectRepository(Calificacion)
    private calificacionesRepository: Repository<Calificacion>,
  ) {}

  // Crear una calificación
  async create(createCalificacionDto: CreateCalificacionDto): Promise<Calificacion> {
    const newCalificacion = this.calificacionesRepository.create(createCalificacionDto);
    return this.calificacionesRepository.save(newCalificacion);
  }

  // Leer las calificaciones
  async findAll(): Promise<Calificacion[]> {
    return this.calificacionesRepository.find();
  }
}
