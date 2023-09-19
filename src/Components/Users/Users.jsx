import './Users.css'
import {useLoaderData} from "react-router-dom";
import User from "../User/User";
const Users = () => {

    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>This is Our users</h1>
            <p>Our user:{users.length}</p>
            <div className="container">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;