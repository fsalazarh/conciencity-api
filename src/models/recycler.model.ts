import {model, property} from '@loopback/repository';
import {User} from '.';

@model()
export class Recycler extends User {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  constructor(data?: Partial<Recycler>) {
    super(data);
  }
}

export interface RecyclerRelations {
  // describe navigational properties here
}

export type RecyclerWithRelations = Recycler & RecyclerRelations;
