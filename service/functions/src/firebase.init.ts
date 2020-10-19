import { initializeApp, database } from 'firebase-admin';

initializeApp();

const db = database();

export {
    db
}
