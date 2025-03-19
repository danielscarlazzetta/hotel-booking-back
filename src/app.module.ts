import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PropiedadesModule } from './propiedades/propiedades.module';

@Module({
  imports: [AuthModule, UsuariosModule, PropiedadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
