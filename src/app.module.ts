import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './pets/pets.controller';
import { Pet } from './pets/pet.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING || "mongodb+srv://robby:admin1234@servercliente.73azq.mongodb.net/pets?retryWrites=true&w=majority",
      database: process.env.MONGODB_DATABASE,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    TypeOrmModule.forFeature([Pet])
  ],
  controllers: [AppController, PetsController],
  providers: [AppService],
})
export class AppModule {}
