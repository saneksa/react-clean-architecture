import { User } from "../../entities/user/user.entities";
import { ErrorHandler } from "../../infrastructure/errorHandler";
import { UserService } from "../../interfaceadapters/users/api/UserService";

export class GetUsers {
  constructor(
    private userService: UserService,
    private errorHandler: ErrorHandler
  ) {}

  async execute(): Promise<User[] | undefined> {
    try {
      return await this.userService.getUsers();
    } catch (_error) {
      const error = _error as Error;
      this.errorHandler.handleError(error);
    }
  }
}
