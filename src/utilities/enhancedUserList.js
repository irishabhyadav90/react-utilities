import { WithLoaderAndError } from "../hoc";

const UserList = ({ userList }) => {
    return (
        <div>
            {userList?.map((user) => <div key={user.id} >{user.name}</div>)}
        </div>
    );
}

const fetchUsers = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve([{ id: 1, name: 'Jack' }, { id: 2, name: 'Dan' }])
    }, 2000);
})

const EnhanceUserListComponent = WithLoaderAndError(UserList, fetchUsers);

export default EnhanceUserListComponent;