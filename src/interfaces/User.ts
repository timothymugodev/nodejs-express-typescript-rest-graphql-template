export interface User {
    firstName: string;
    lastName : string;
    email : string;
    password? : string;
}

export interface ICreateUser extends User {}