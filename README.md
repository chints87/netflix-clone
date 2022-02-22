# Netflix Clone 
###### Using ReactJS to build front-end; Google firebase as the back-end to develop a Netflix clone
----
### Installation
Clone the Github repository from the following steps:
```
$git clone https://github.com/chints87/.git *name of folder*
$cd *name of folder*
```

Go to the create folder, View .git folder, go to .git/hooks/pre-commit.sample

```
#!C:/Program\ Files/Git/usr/bin/sh.exe

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "main" ]; then
  echo "You can't commit directly to main branch"
  exit 1
fi

```

Add the following code. This will ensure that no commits are made
directly to the main branch 


1. Go to Firebase
2. Create a new project
3. Click on the created new project
4. Create a web app for this project
5. Give it a name
6. Get the config file and add to this a file called firbase.js

```
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIRBASE_MEASUREMENT_ID,
};

// Initialize netflix-clone app on firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
```
7. Create a .env.local file and add firebaseConfig values
   obtained from firebase. Make sure to add the prefix 
   REACT_APP when adding variable name to firebase constants

#### Create a firestore database    
7. Now go to the project in firebase and select firestore database
8. Start in test mode 
9. Click Enable 
8. Add a db connection, see below, back in the firebase.js file in your src file
```
// Connect to db
const db = firebaseApp.firestore();

export default db;

```

#### Obtain API key from [MovieDB](https://www.themoviedb.org/)

1. Setup an account
2. Click on the power button and then click on setting
3. In the list of options find API.
4. Click and copy API key. 
5. Add this API key to .env.local with a prefix
   REACT_APP




