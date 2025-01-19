import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { CalificacionesModule } from './calificaciones/calificaciones.module';

@Module({
  imports: [
    // Configuración de la base de datos con TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres.ceirbevtxetb.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Marcos2023547123',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true, // ⚠️ Solo para desarrollo; desactiva en producción
    }),
    // Módulos de la aplicación
    UsuariosModule,
    PeliculasModule,
    CalificacionesModule,
  ],
})
export class AppModule {}
