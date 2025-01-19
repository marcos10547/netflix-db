import { Controller, Post, Body, Get } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';

@Controller('calificaciones')
export class CalificacionesController {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @Post()
  async create(@Body() createCalificacionDto: CreateCalificacionDto) {
    return this.calificacionesService.create(createCalificacionDto);
  }

  @Get()
  async findAll() {
    return this.calificacionesService.findAll();
  }
}
