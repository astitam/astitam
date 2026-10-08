import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuario/usuario.entity';

@Injectable()
export class AutenticacaoService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async login(email: string, senha: string) {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (!usuario) {
      return {
        mensagem: 'E-mail ou senha inválidos',
      };
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return {
        mensagem: 'E-mail ou senha inválidos',
      };
    }

    return {
      mensagem: 'Login realizado com sucesso',
      id_usuario: usuario.id_usuario,
      nome: usuario.nome,
      email: usuario.email,
    };
  }
}