import { observer } from "mobx-react-lite";
import { UserStore } from "../../api/UserStore";

export const UserList = observer((props: { userStore: UserStore }) => {
  return (
    <div>
      <div>
        <div>{props.userStore.findUser.execute(1)?.name}</div>
        <button onClick={() => props.userStore.fetchUsers()}>Get Users</button>
        <div>
          {props.userStore.isLoading ? (
            <div> Loading... </div>
          ) : (
            props.userStore.users.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});
