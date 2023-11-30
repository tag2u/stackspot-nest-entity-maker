import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
} from 'typeorm';
import { BaseEntity, DadosComContagemField } from '@models/base/base.entity';
import { v4 as uuid } from 'uuid';

@Entity('{{model_name}}')
@ObjectType()
export class {{model_name|pascalcase}} extends BaseEntity {
  constructor(data?: Partial<{{model_name|pascalcase}}>) {
    super();
    Object.assign(this, data);

    if (!data?.id) {
      this.id = uuid();
    }
  }
}

@ObjectType()
export class Dados{{model_name|pascalcase}}ComContagem extends DadosComContagemField({{model_name|pascalcase}}) {}

