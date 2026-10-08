import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('recuperacao_senha')
export class RecuperacaoSenha {
  @PrimaryGeneratedColumn({ name: 'id_recuperacao' })
  id_recuperacao: number;

  @Column({ name: 'id_usuario', unique: true })
  id_usuario: number;

  @Column({ name: 'token', length: 255 })
  token: string;

  @Column({ name: 'data_expiracao', type: 'datetime' })
  data_expiracao: Date;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}