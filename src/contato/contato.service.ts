import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';

@Injectable()
export class ContatoService {
  constructor(
    @InjectRepository(Contato)
    private readonly contatoRepository: Repository<Contato>,
  ) {}

  async enviar(
    nome: string,
    email: string,
    curso_area_interesse: string,
    mensagem: string,
  ) {
    const contato = this.contatoRepository.create({
      nome,
      email,
      curso_area_interesse,
      mensagem,
    });

    const contatoSalvo = await this.contatoRepository.save(contato);

    return {
      mensagem: 'Mensagem enviada com sucesso',
      id_contato: contatoSalvo.id_contato,
    };
  }
}