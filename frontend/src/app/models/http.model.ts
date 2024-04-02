import { Photo } from './photo.model';
import { User } from './user.model';

export interface Result {
  data: User[] | Photo[];
  schema: any;
}