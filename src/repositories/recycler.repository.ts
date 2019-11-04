import {DefaultCrudRepository} from '@loopback/repository';
import {Recycler, RecyclerRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RecyclerRepository extends DefaultCrudRepository<
  Recycler,
  typeof Recycler.prototype.id,
  RecyclerRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Recycler, dataSource);
  }
}
