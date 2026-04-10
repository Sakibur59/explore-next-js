import { Suspense } from "react";
import UserPage from "../User/page";


const UsersPage = () => {
    const UsersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    return (
        <div>
            <Suspense fallback={<h1>Loading....</h1>}>

            <UserPage UsersPromise={UsersPromise}></UserPage>
            </Suspense>
        </div>
    );
};

export default UsersPage;