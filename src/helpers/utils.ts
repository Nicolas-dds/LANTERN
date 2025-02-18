export function isEmpty(value: any): boolean {
    return value === null || value === undefined || (typeof value === 'string' && value.trim().length === 0);
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function mergeObjects<T>(target: T, source: Partial<T>): T {
    return { ...target, ...source };
}

export function debounce(func: Function, delay: number): Function {
    let timeoutId: NodeJS.Timeout;
    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}