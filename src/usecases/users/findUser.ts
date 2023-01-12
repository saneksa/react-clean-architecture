import { User } from "../../entities/user/user.entities";
import { UsersRepository } from "../../interfaceadapters/users/api/UserRepository";

export class FindUser {
  constructor(private repository: UsersRepository) {}

  execute(id: number): User | undefined {
    return this.repository.find(id);
  }
}
