import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
    import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
@Entity({ name: 'tb_postagens' }) //create table tb_postagens

export class Postagem {
  @PrimaryGeneratedColumn() //primary key que fica em cima do elemento id
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // isnot empty esta nao pode ficar vazio titulo texto
  @Column({ length: 100, nullable: false })
  titulo: string;
   // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
   @Transform(({ value }: TransformFnParams) => value?.trim())
   @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  
 @Column({ 
  type: 'date', })
  data:Date;

  
@ManyToOne(()=> tema,(tema)=> tema.postagem,{
  onDelete:"CASCADE"
})
  tema:tema
  
@ManyToOne(()=> Usuario,(x)=> x.usuario,{
  onDelete:"CASCADE"
})
  usuario:Usuario




}
