
import { DadosComContagem } from '@models/base/base.entity';
import { UseGuards } from '@nestjs/common';
import {
    Resolver,
    Query,
    Args,
    Mutation,
} from '@nestjs/graphql';
import { AuthGuard } from 'src/auth';
import { Roles } from 'src/auth/roles.decorator';
import { ADMIN } from 'src/shared/roles.const';
import { Query{{model_name|pascalcase}}Args } from './{{model_name}}.args';
import { Dados{{model_name|pascalcase}}ComContagem, {{model_name|pascalcase}} } from './{{model_name}}.entity';
import { Create{{model_name|pascalcase}}InputType } from './{{model_name}}.input';
import { {{model_name|pascalcase}}Service } from './{{model_name}}.service';

@Resolver(() => {{model_name|pascalcase}})
export class {{model_name|pascalcase}}Resolver {
    constructor(private readonly _service: {{model_name|pascalcase}}Service) { }

    // Queries
    @UseGuards(AuthGuard)
    @Roles(ADMIN)
    @Query(() => Dados{{model_name|pascalcase}}ComContagem)
    public async get{{model_name|pascalcase}}(
        @Args() { where, pagination }: Query{{model_name|pascalcase}}Args,
    ): Promise<DadosComContagem<{{model_name|pascalcase}}>> {
        return this._service.findAndCount(where, pagination);
    }

    @UseGuards(AuthGuard)
    @Roles(ADMIN)
    @Query(() => {{model_name|pascalcase}})
    public async get{{model_name|pascalcase}}ById(@Args({ name: 'id' }) id: string): Promise<{{model_name|pascalcase}}> {
        return this._service.findById(id);
    }

    // Mutations
    @Mutation(() => {{model_name|pascalcase}}, { name: 'criar{{model_name|pascalcase}}' })
    @UseGuards(AuthGuard)
    @Roles(ADMIN)
    public async create(
        @Args('input') input: Create{{model_name|pascalcase}}InputType,
    ): Promise<{{model_name|pascalcase}}> {
        return this._service.create{{model_name|pascalcase}}({ ...input });
    }
}
