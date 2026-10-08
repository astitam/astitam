import { Body, Controller, Post } from '@nestjs/common';
import { RecuperacaoService } from './recuperacao.service';

@Controller('recuperacao-senha')
export class RecuperacaoController {
  constructor(
    private readonly recuperacaoService: RecuperacaoService,
  ) {}

  @Post('solicitar')
  solicitar(@Body('email') email: string) {
    return this.recuperacaoService.solicitar(email);
  }
}