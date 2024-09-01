export default interface INote {
    id: number;
    title: string;
    contenido: string;
    user: IUser;
}

interface IUser {
    id: number;
    email: string;
    userName: string;
}
