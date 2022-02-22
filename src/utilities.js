import faker from "@faker-js/faker";

export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const isValidJson = (str) => {
    try {
        const validJson = JSON.parse(str);
        return validJson;
    } catch (e) {
        return false;
    }
};

export const createFakeData = () => {
    const fakeItems = [...Array(100)].map(() => ({
        name: faker.name.findName(),
        birthday: faker.date.past()
    }));

    return JSON.stringify(fakeItems, null, 2);
};

export const getCurrentMonth = () => {
    const now = new Date();
    const currentMonth = now.getMonth();

    return currentMonth.toString();
}