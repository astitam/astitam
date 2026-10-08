import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contato')
export class Contato {
  @PrimaryGeneratedColumn({ name: 'id_contato' })
  id_contato: number;

  @Column({ name: 'nome', length: 100 })
  nome: string;

  @Column({ name: 'email', length: 150 })
  email: string;

  @Column({
    name: 'curso_area_interesse',
    length: 150,
    nullable: true,
  })
  curso_area_interesse: string;

  @Column({ name: 'mensagem', type: 'text' })
  mensagem: string;
}