import React, { useState } from 'react';
import Card from '../../UI/Card/Card.component';
import Button from '../../UI/Button/Button.component';
import Modal from '../../UI/Modal/Modal.component';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [showModal, setShowModal] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setShowModal({
                title: 'Invalid Input',
                message: "Username & Age can't be blank...😠💢",
            });
            return;
        }
        if (+enteredAge < 1) {
            setShowModal({
                title: 'Invalid Age',
                message: 'As if age can be less than 1... 👊',
            });
            return;
        }
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const modalHandler = () => {
        setShowModal(null);
    };

    return (
        <>
            {showModal && (
                <Modal
                    title={showModal.title}
                    message={showModal.message}
                    modalHandler={modalHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        onChange={usernameChangedHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        type='number'
                        id='age'
                        onChange={ageChangedHandler}
                        value={enteredAge}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
