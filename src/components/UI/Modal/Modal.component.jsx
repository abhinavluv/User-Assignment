import React from 'react';
import Card from '../Card/Card.component';
import Button from '../Button/Button.component';

import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <>
            <div className={styles.backdrop} onClick={props.modalHandler}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.modalHandler}>OK</Button>
                </footer>
            </Card>
        </>
    );
};

export default Modal;
