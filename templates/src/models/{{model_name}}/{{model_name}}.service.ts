import { Injectable } from '@nestjs/common';
import { {{model_name|pascalcase}} } from './{{model_name}}.entity';
import { Between, FindManyOptions, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationInput } from 'src/graphql';
import { DadosComContagem } from '@models/base/base.entity';

@Injectable()
export class {{model_name|pascalcase}}Service {
  constructor() {}
  @InjectRepository({{model_name|pascalcase}}) _repo = new Repository<{{model_name|pascalcase}}>();

  public async findAndCount(where: Partial<{{model_name|pascalcase}}>, pagination: PaginationInput): Promise<DadosComContagem<{{model_name|pascalcase}}>> {
    const filter: FindManyOptions = { where: { ...where }, ...pagination };

    const dados = await this._repo.findAndCount(filter);

    return new DadosComContagem<{{model_name|pascalcase}}>(dados)
  }

  public async findByIds(
    ids: string[],
    where?: Partial<{{model_name|pascalcase}}>,
    pagination?: PaginationInput,
  ): Promise<{{model_name|pascalcase}}[]> {
    return this._repo.findByIds(ids, {
      where,
      ...pagination,
    });
  }

  public async findById(id: string): Promise<{{model_name|pascalcase}}> {
    return this._repo.findOne({ where: { id } });
  }

  public create{{model_name|pascalcase}}(dados: Partial<{{model_name|pascalcase}}>): Promise<{{model_name|pascalcase}}> {
    const nova{{model_name|pascalcase}} = new {{model_name|pascalcase}}(dados)
    return this._repo.save(nova{{model_name|pascalcase}});
  }
}