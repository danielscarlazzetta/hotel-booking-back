import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropiedadDto } from './dto/create-propiedade.dto';

@Injectable()
export class PropiedadesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePropiedadDto) {
    return this.prisma.propiedad.create({ data });
  }

  async findAll() {
    return this.prisma.propiedad.findMany();
  }

  async findOne(id: string) {
    return this.prisma.propiedad.findUnique({ where: { id } });
  }
}
