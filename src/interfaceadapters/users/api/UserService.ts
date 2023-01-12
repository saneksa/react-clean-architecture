import { User } from "../../../entities/user/user.entities";

const getFakeUsers = (): Promise<User[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
      ]);
    }, 2000);
  });

export class UserService {
  async getUsers(): Promise<User[]> {
    try {
      // const response = await axios.get("/users");
      return await getFakeUsers();
    } catch (_error) {
      const error = _error as Error;
      throw new Error(error.message);
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      //   const response = await axios.post("/users", user);

      console.warn("create ", user);

      return user;
    } catch (_error) {
      const error = _error as Error;
      throw new Error(error.message);
    }
  }
}
