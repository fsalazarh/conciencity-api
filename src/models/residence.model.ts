import {model, property} from '@loopback/repository';
import {User} from '.';

@model()
export class Residence extends User {
  @property({
    type: 'string',
    id: true,
    //generated: true,
  })
  id: string;

  constructor(data?: Partial<Residence>) {
    super(data);
  }
}

export interface ResidenceRelations {
  // describe navigational properties here
}

export type ResidenceWithRelations = Residence & ResidenceRelations;
