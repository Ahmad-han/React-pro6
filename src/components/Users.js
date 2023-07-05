import { useSelector } from "react-redux"
import { User } from "./User"


export const Users = () => {
const users = useSelector((state) => state.users.users)

    return (
        <ul className="users">
            {
                users.map((user) => {
                    return <User key={user.id} user={user}/>
                })
            }
        </ul>
    )
}