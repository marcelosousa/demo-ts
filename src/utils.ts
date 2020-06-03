import { Info } from './models/repository';

export function buildRepoTitle(info: Info) {
    return `${info.name} (${info.startsCount})`;
}

export function buildRepoAuthor(info: Info) {
    return `${info.author} ${info.creationDate}`;
}

export function buildRepoDate(info: Info) {
    return `Created at ${info.creationDate} (last update at ${info.lastUpdateDate})`;
}