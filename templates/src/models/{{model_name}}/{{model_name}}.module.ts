import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { {{model_name|pascalcase}} } from './{{model_name}}.entity';
import { {{model_name|pascalcase}}Service } from './{{model_name}}.service';
import { {{model_name|pascalcase}}Resolver } from './{{model_name}}.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([{{model_name|pascalcase}}]),
  ],
  providers: [{{model_name|pascalcase}}Service, {{model_name|pascalcase}}Resolver],
  exports: [{{model_name|pascalcase}}Service],
})
export class {{model_name|pascalcase}}Module {}
