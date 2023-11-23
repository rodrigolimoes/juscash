import { useLocalStorage } from "./useLocalStorage";
import { v4 } from "uuid";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export const useUser = (id?: string) => {
  const [users, setUsers] = useLocalStorage<Array<User>>("users", []);

  const createUser = ({ name, password, email }: User) => {
    const newUser = { id: v4(), name, email, password };

    const existUser = users.find((e) => e.email === email);

    if (existUser) throw new Error("O Usuário já existe");

    setUsers((prevSate) => [...prevSate, newUser]);
  };

  return {
    data: id ? users.find((user) => user.id === id) : users,
    createUser,
  };
};
