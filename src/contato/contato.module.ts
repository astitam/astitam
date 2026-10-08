import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contato } from './contato.entity';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contato])],
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}