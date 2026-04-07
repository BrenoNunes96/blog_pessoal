
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:"tb_temas"})
export class tema{
 @ApiProperty() 
@PrimaryGeneratedColumn()
id:number;
 @ApiProperty() 
@IsNotEmpty()
@Column({length:(255),nullable:false})
descricao:string
 @ApiProperty() 
@OneToMany(()=> Postagem,(x)=> x.tema)
postagem:Postagem[]

}   