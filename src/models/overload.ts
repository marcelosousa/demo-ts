export function fn(i: number): number;
export function fn(s: string): string;

export function fn(x: number|string): any {
    if (typeof(x) === 'string') {
        console.log(`s:${x}`);
        return '';
    } else {
        console.log(`n:${x}`);
        return 1;
    }
}
