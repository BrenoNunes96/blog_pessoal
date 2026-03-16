
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name:"tb_temas"})
export class tema{

@PrimaryGeneratedColumn()
id:number;

@IsNotEmpty()
@Column({length:(255),nullable:false})
descricao:string
@OneToMany(()=> Postagem,(x)=> x.tema)
postagem:Postagem[]

}   