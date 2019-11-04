import {DefaultCrudRepository} from '@loopback/repository';
import {Residence, ResidenceRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ResidenceRepository extends DefaultCrudRepository<
  Residence,
  typeof Residence.prototype.id,
  ResidenceRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Residence, dataSource);
  }
}
