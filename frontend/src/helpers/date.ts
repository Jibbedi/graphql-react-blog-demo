export function formatDateFromTimestamp(timestamp: any): string {
  const date = new Date(parseInt(timestamp, 10));
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}