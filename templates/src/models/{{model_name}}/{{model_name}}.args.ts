import { Field, ArgsType } from '@nestjs/graphql';
import { PaginationInput } from 'src/graphql';
import {
  Create{{model_name|pascalcase}}InputType,
  Get{{model_name|pascalcase}}Input,
} from './{{model_name}}.input';

@ArgsType()
export class Query{{model_name|pascalcase}}Args {
  @Field({ name: 'where', nullable: true })
  where: Get{{model_name|pascalcase}}Input;

  @Field({ name: 'pagination', nullable: true })
  pagination: PaginationInput;
}

@ArgsType()
export class MutationCreate{{model_name|pascalcase}}Args {
  @Field({ nullable: true })
  input: Create{{model_name|pascalcase}}InputType;
}
