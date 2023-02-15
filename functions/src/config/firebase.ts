import { initializeApp } from 'firebase-admin';
import * as func from 'firebase-functions';

const admin = initializeApp();
const db = admin.firestore();
const functions = func.region("europe-west2");

export {admin, db, functions}