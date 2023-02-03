export const noAssigned = "no assigned";
export const currentlyReading = "currentlyReading";
export const wantToRead = "wantToRead";
export const read = "read";

export const pretty = (str) =>
{
    const result = str.replace(/([A-Z])/g,' $1');

    const final = result.charAt(0).toUpperCase()+result.slice(1);

    return final;
}
