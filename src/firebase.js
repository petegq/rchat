import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {
	FIREBASE_API_KEY,
	FIREBASE_APP_IP,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_MESSAGE_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
} from './config';

const config = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
	appId: FIREBASE_APP_IP,
	measurementId: FIREBASE_MEASUREMENT_ID,
};

const Firebase = firebase.initializeApp(config);
const Auth = firebase.auth();
const Firestore = firebase.firestore();
const Storage = firebase.storage();

export { Firebase, Auth, Firestore, Storage };
