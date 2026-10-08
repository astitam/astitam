import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Newsletter } from './newsletter.entity';

@Injectable()
export class NewsletterService {
    constructor(
        @InjectRepository(Newsletter)
        private readonly newsletterRepository: Repository<Newsletter>,
    ) { }

    async inscrever(id_usuario: number) {
        const inscricaoExistente = await this.newsletterRepository.findOne({
            where: { id_usuario },
        });

        if (inscricaoExistente) {
            return {
                mensagem: 'Usuário já está inscrito na newsletter',
            };
        }

        const inscricao = this.newsletterRepository.create({
            id_usuario,
        });

        const newsletterSalva =
            await this.newsletterRepository.save(inscricao);

        return {
            mensagem: 'Inscrição realizada com sucesso',
            id_newsletter: newsletterSalva.id_newsletter,
            id_usuario: newsletterSalva.id_usuario,
        };
    }
}