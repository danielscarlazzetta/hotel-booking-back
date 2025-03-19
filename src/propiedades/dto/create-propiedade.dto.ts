import { IsNotEmpty } from 'class-validator';

export class CreatePropiedadDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  direccion: string;

  @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  comuna: string;

  @IsNotEmpty()
  numero: number;

  @IsNotEmpty()
  dueñoId: string;
}
