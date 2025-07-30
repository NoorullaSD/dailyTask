import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBbeWFuKey8WmVnLhXFrLWw-7z1CisRzZM",
    authDomain: "daily-task-4912a.firebaseapp.com",
    projectId: "daily-task-4912a",
    storageBucket: "daily-task-4912a.appspot.com",
    messagingSenderId: "830681313427",
    appId: "1:830681313427:web:b026d1cb7d50d1c9f29d66"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
