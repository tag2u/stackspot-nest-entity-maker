import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class Get{{model_name|pascalcase}}Input {
  @Field({ nullable: true })
  readonly id?: string;
}

@InputType()
export class Create{{model_name|pascalcase}}InputType {
  @Field({ nullable: true })
  readonly id?: string;
}
