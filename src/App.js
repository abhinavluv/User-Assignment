import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser.component';
import UsersList from './components/Users/UsersList/UsersList.component';

function App() {
    const [userData, setUserData] = useState([]);

    const addUserHandler = (username, userAge) => {
        setUserData((prevUserData) => {
            return [
                ...prevUserData,
                { name: username, age: userAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <div className='App'>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={userData} />
        </div>
    );
}

export default App;
