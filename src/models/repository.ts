export interface Repository {
    id: number;
    name: string;
    full_name: string;
    url: string;
}

export const MY_LIST = [
    "A",
    "B",
    "C"
];

export var MY_INT = 0;

export function myInit(): number {
    MY_INT++;
    return MY_INT;
}

export function myIncrement(value: number): number {
    return value + 1;
}

export function myCondition(value: number): boolean {
    return value < 100;
}

export function myConsumer(value: string) {
    console.log(value);
}

export function myConsumerInt(value: number) {
    console.log(value);
}