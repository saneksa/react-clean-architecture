import { makeAutoObservable } from "mobx";
import { User } from "../../../entities/user/user.entities";
import { GetUsers } from "../../../usecases/users/getUsers";
import { UserService } from "./UserService";
import { FindUser } from "../../../usecases/users/findUser";
import { UsersRepository } from "./UserRepository";
import { ErrorHandler } from "../../../infrastructure/errorHandler";

export class UserStore {
  users: User[] = [];
  isLoading: boolean = false;

  findUser: FindUser;
  getUsers: GetUsers;

  constructor(private errorHandler: ErrorHandler) {
    const userService = new UserService();

    this.findUser = new FindUser(new UsersRepository(userService));
    this.getUsers = new GetUsers(userService, new ErrorHandler());

    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.isLoading = true;

    try {
      this.users = (await this.getUsers.execute()) ?? [];
    } catch (_error) {
      const error = _error as Error;
      this.errorHandler.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }
}
