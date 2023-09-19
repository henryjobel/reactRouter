import "./User.css"

const User = ({user}) => {
    const {name,phone,email} = user;
    return (
        <div className="listuser">
            <h2>Name:{name}</h2>
            <p>Phone:{phone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;