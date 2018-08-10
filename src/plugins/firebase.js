import Firebase from "firebase/app";
import "firebase/firestore";
import config from '../../firebase.json'

const firebase = Firebase.initializeApp(config);

export default firebase