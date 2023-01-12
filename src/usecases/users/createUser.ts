import { User } from "../../entities/user/user.entities";
import { UsersRepository } from "../../interfaceadapters/users/api/UserRepository";

export class CreateUser {
  constructor(private repository: UsersRepository) {}

  execute(user: User) {
    return this.repository.add(user);
  }
}
