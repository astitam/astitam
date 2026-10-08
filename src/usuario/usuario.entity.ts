import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_usuario: number;

  @Column({ name: 'nome', length: 100 })
  nome: string;

  @Column({ name: 'email', length: 150, unique: true })
  email: string;

  @Column({ name: 'senha', length: 255 })
  senha: string;
}