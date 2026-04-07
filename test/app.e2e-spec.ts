  import { Test, TestingModule } from '@nestjs/testing';
  import { INestApplication, ValidationPipe } from '@nestjs/common';
  import request from 'supertest';
  import { AppModule } from './../src/app.module';
  import { TypeOrmModule } from '@nestjs/typeorm';

  describe('Testes dos Módulos Usuário e Auth (e2e)', () => {
    let app: INestApplication;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let token:any;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let usuarioId:any;


    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [
          TypeOrmModule.forRoot({
            type: "sqlite",
            database: ":memory:",
            entities: [__dirname + "./../src/**/entities/*.entity.ts"],
            synchronize: true,
            dropSchema: true
          }),
          AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(new ValidationPipe());
      await app.init();
    });

    afterAll(async () => {
      await app.close();
    });





  it("01-deve cadastrar um novo usuario",async()=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const reposta = await request(app.getHttpServer())
  .post("/usuarios/cadastrar")
  .send({
    nome:"root",
    usuario:"root@gmail.com",
    senha:"rootrootd",
    datanascimento:"1996-06-20",
    foto:"https://i.imgur.com/algumafoto.jpg"
  })
  .expect(201)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  usuarioId = reposta.body.id


  })

  it("02 - nao deve ter usuario duplicado",async()=>{
    await request(app.getHttpServer())
    .post("/usuarios/cadastrar")
    .send({
  nome:"Root",
  usuario:"root@gmail.com",
  senha:"rootroot",
  datanascimento:"1996-06-20",
  foto:"-"
    })
  .expect(400)



  })
it("03- deve autenticar o login", async () => {
  const resposta = await request(app.getHttpServer())
    .post("/usuarios/logar")
    .send({
      usuario: "root@gmail.com",
      senha: "rootrootd"
    })
    .expect(200);


  console.log("RESPOSTA DO SEU BACK-END NO LOGIN:", resposta.body);


  token = resposta.body.token || resposta.body.access_token; 
});

  it("04 - deve listar os usuarios", async () => {
    return request(app.getHttpServer())
    .get("/usuarios/all") 
    .set("Authorization", `${token}`) 
    .send({})
    .expect(200)
  })

  it("05 - deve atualizar um usuario", async () => {
    return request(app.getHttpServer())
    .put("/usuarios/atualizar") 
    .set('Authorization', `${token}`)
    .send({
      id: usuarioId,
      nome: 'root',
      usuario: "rootusuario@gmail.com",
      senha: "12314145234",
      datanascimento: "1995-09-01",
      foto: "-"
    })
    .expect(200)
    .then(resposta => {
      expect(resposta.body.nome).toEqual("root");
    })
  })

  it("06 - buscar por id", async () => {
    return request(app.getHttpServer())
    .get(`/usuarios/${usuarioId}`)
    .set('Authorization', `${token}`) 
    .expect(200)
  })


    })

