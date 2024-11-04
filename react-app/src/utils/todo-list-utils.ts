export const transformDateToString = (date: Date) => {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2,"0");
    const day = date.getUTCDate().toString().padStart(2,"0");
    const hour = date.getHours().toString().padStart(2,"0");
    const minutes = date.getUTCMinutes().toString().padStart(2,"0");

    return `${day}/${month}/${year}, ${hour}:${minutes}`
}
