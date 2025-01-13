import { User } from '../interfaces/userInterfaces';

const UserList = ({data} : {data: User[]}) => {

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList