import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Recycler} from '../models';
import {RecyclerRepository} from '../repositories';

export class RecyclerController {
  constructor(
    @repository(RecyclerRepository)
    public recyclerRepository : RecyclerRepository,
  ) {}

  @post('/recyclers', {
    responses: {
      '200': {
        description: 'Recycler model instance',
        content: {'application/json': {schema: getModelSchemaRef(Recycler)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recycler, {
            title: 'NewRecycler',
            exclude: ['id'],
          }),
        },
      },
    })
    recycler: Omit<Recycler, 'id'>,
  ): Promise<Recycler> {
    return this.recyclerRepository.create(recycler);
  }

  @get('/recyclers/count', {
    responses: {
      '200': {
        description: 'Recycler model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Recycler)) where?: Where<Recycler>,
  ): Promise<Count> {
    return this.recyclerRepository.count(where);
  }

  @get('/recyclers', {
    responses: {
      '200': {
        description: 'Array of Recycler model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Recycler)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Recycler)) filter?: Filter<Recycler>,
  ): Promise<Recycler[]> {
    return this.recyclerRepository.find(filter);
  }

  @patch('/recyclers', {
    responses: {
      '200': {
        description: 'Recycler PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recycler, {partial: true}),
        },
      },
    })
    recycler: Recycler,
    @param.query.object('where', getWhereSchemaFor(Recycler)) where?: Where<Recycler>,
  ): Promise<Count> {
    return this.recyclerRepository.updateAll(recycler, where);
  }

  @get('/recyclers/{id}', {
    responses: {
      '200': {
        description: 'Recycler model instance',
        content: {'application/json': {schema: getModelSchemaRef(Recycler)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Recycler> {
    return this.recyclerRepository.findById(id);
  }

  @patch('/recyclers/{id}', {
    responses: {
      '204': {
        description: 'Recycler PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recycler, {partial: true}),
        },
      },
    })
    recycler: Recycler,
  ): Promise<void> {
    await this.recyclerRepository.updateById(id, recycler);
  }

  @put('/recyclers/{id}', {
    responses: {
      '204': {
        description: 'Recycler PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() recycler: Recycler,
  ): Promise<void> {
    await this.recyclerRepository.replaceById(id, recycler);
  }

  @del('/recyclers/{id}', {
    responses: {
      '204': {
        description: 'Recycler DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.recyclerRepository.deleteById(id);
  }
}
