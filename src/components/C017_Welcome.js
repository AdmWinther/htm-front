import GetUserMainRoleFromLocalStorage from "../services/GetUserMainRoleFromLocalStorage";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the Dashboard. You logged in with the main role of {GetUserMainRoleFromLocalStorage()} </h1>
            <p>Click on the links to the left to navigate.</p>
        </div>
    );
}

export default Welcome;