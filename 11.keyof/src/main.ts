interface IUser{
    name: string;
    age: number;
    address: string;
}

type UserKeys = keyof IUser
const user = {
    name: "John",
    age: 20,
    address: 'seoul'
}