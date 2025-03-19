import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PropiedadesService } from './propiedades.service';
import { CreatePropiedadDto } from './dto/create-propiedade.dto';

@Controller('propiedades')
export class PropiedadesController {
  constructor(private readonly propiedadesService: PropiedadesService) {}

  @Post()
  create(@Body() createPropiedadDto: CreatePropiedadDto) {
    return this.propiedadesService.create(createPropiedadDto);
  }

  @Get()
  findAll() {
    return this.propiedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propiedadesService.findOne(id);
  }
}
