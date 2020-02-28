import { Owner } from './owner';

export interface Repositoyr {
    id: number;
    name: string;
    full_name: string;
    url: string;
    owner: Owner;
}