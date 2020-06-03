export interface Info {
    name: string;
    startsCount: number;
    labels: string[];
    author: string;
    creationDate: Date;
    lastUpdateDate: Date;
}

export interface Repository {
    id: number;
    name: string;
    full_name: string;
    url: string;
    info: Info;
}
