export interface Repository {
    id: number;
    name: string;
    full_name: Name;
    url: string;
}

interface Name {
    first_name: string;
    last_name: string;
}

function printName(name: Name): String {
    return name.first_name + name.last_name
}

function test(name: Name): String {
    return printName(name)
}

function printRepository(repo: Repository): String {
    return repo.id + repo.name + printName(repo.full_name) + repo.url;
}