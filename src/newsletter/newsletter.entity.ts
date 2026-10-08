import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('newsletter')
export class Newsletter {
  @PrimaryGeneratedColumn({ name: 'id_newsletter' })
  id_newsletter: number;

  @Column({ name: 'id_usuario', unique: true })
  id_usuario: number;

  @Column({
    name: 'data_inscricao',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  data_inscricao: Date;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}