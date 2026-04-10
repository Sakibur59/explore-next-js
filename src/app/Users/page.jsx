import UserPage from "../User/page";


const UsersPage = () => {
    const UsersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    return (
        <div>
            <UserPage UsersPromise={UsersPromise}></UserPage>
        </div>
    );
};

export default UsersPage;