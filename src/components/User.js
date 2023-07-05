import { NavLink, useParams } from "react-router-dom"


export const User = ({ user }) => {
    const { id } = useParams()
    
    return (
        <li>
            <NavLink to={`/${user.id}`}>
                {
                    user.name
                }
            </NavLink>   
        </li>
    )
}