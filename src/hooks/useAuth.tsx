import { useLocalStorage } from "./useLocalStorage";
import { User } from "./useUser";

type Data = Omit<User, "id" | "name">;

export const useAuth = () => {
  const [users] = useLocalStorage<Array<User>>("users", []);
  const [loggedIn, setLoggedIn] = useLocalStorage<boolean>("loggedin", false);
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const login = (data: Data) => {
    const user = users.find((user) => user.email === data.email);

    if (user && user.password === data.password) {
      setLoggedIn(true);
      setUser(user);
    } else {
      setLoggedIn(false);
      setUser(null);

      throw new Error("E-mail ou senha incorretos");
    }
  };

  return {
    data: {
      loggedIn,
      user,
    },
    login,
  };
};
