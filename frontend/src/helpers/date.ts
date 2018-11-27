export function formatDateFromTimestamp(timestamp : number) : string {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}