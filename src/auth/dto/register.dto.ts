import { IsEmail, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsNotEmpty()
  fist_name: string;

  @IsString()
  @IsNotEmpty()
  second_name: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  // @IsNotEmpty()
  region: string;

  @IsString()
  // @IsNotEmpty()
  comuna: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  number_home: number;
}