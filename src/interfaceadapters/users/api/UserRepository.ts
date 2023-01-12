import { makeAutoObservable } from "mobx";
import { User } from "../../../entities/user/user.entities";
import { computedFn } from "mobx-utils";
import { UserService } from "./UserService";

export class UsersRepository {
  private users: User[] = [];

  constructor(private dataService: UserService) {
    makeAutoObservable(this);
  }

  find = computedFn((id: number) => {
    return this.users.find((user) => user.id === id);
  });

  add(user: User) {
    this.dataService.createUser(user);
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
