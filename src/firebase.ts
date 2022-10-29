import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBk1ZmObCTDr96rexw_Frv9t-guRiPFI8E',
  authDomain: 'tambola-2022.firebaseapp.com',
  databaseURL:
    'https://tambola-2022-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tambola-2022',
  storageBucket: 'tambola-2022.appspot.com',
  messagingSenderId: '385428633857',
  appId: '1:385428633857:web:b9f1f19f4512e0e7470300',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default app;
export { database };
