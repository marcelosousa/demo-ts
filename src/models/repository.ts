export interface Repository {
    id: number;
    name: string;
    full_name: string;
    url: string;
}

export var MY_REPO: Repository

export function myFunction(): string {
    return "myFunction";
}
