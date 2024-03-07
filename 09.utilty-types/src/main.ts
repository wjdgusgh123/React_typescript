interface Address{
    email: string;
    address: string;
}

const me = {};
const you: Partial<Address> = {email: 'john@abc.com'};
const all: Address = {email: 'john@abc.com', address: 'john'};


// Pick
// interface Todo{
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: Partial<Todo> = {
//     title: "Clean Room",
//     completed: false
// }


// Omit
interface Todo{
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo,"description">;

const todo: Partial<Todo> = {
    title: "Clean Room",
    completed: false,
    createdAt: 1234123412,
}

//Required

type User = {
    firstName: string,
    lastName?: string
}

let firstUser: User = {
    firstName: "john"
}

let secondUser: Required<User> = {
    firstName: "John"
}

//Record

interface CatInfo{
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> ={
    miffy: { age: 10, breed: "Person"},
    boris: { age: 5, breed: "maine coon"},
    mordred: { age: 16, breed: "british shorthair"}
}

//ReturnType

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string){
    return str;
}

const a: ReturnType<typeof fn> = 'Hello';
const b: ReturnType<typeof fn> = true;