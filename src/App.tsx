import { useMemo } from "react";
import { ErrorHandler } from "./infrastructure/errorHandler";
import { UserStore } from "./interfaceadapters/users/api/UserStore";
import { UserList } from "./interfaceadapters/users/components/UserList/UserList";

export default function App() {
  const userStore = useMemo(() => {
    return new UserStore(new ErrorHandler());
  }, []);

  return (
    <div>
      <UserList userStore={userStore} />
    </div>
  );
}
