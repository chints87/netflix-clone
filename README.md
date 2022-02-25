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



## Setup Stripe for creating subscription plans

1) Setup an account
2) Make sure you are in test mode
3) Look where the API keys are located
4) Create a restricted key, which permissions as required, shown in the firebase stripe extension setup 


## Setup Stripe extension on firebase
[Refer to this link](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md)

1) Go to extensions in the firebase console
2) In the menu list, click on extensions
3) Choose stripe integrations
4) Enable secret key cloud manager
5) Before the install, in the setup add Stripe restricted key(details are shown below the input box). Refer to point 4 
   in 'Setup Stripe....plans'.
6) Leave secret key for webhook empty
7) Install stripe.

#### Add rules to your database about what knd of users can access, read and write
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /customers/{uid} {
      allow read: if request.auth.uid == uid;

      match /checkout_sessions/{id} {
        allow read, write: if request.auth.uid == uid;
      }
      match /subscriptions/{id} {
        allow read: if request.auth.uid == uid;
      }
      match /payments/{id} {
        allow read: if request.auth.uid == uid;
      }
    }

    match /products/{id} {
      allow read: if true;

      match /prices/{id} {
        allow read: if true;
      }

      match /tax_rates/{id} {
        allow read: if true;
      }
    }
  }
}
```

### Setup webhook so that changes in stripe can triggers updates in firebase store

1) Copy the URL extension from firebase and go to your Stripe account and go to webhooks to add the URL as an endpoint.
2) Select events that webhook should listen to.
3) Add the end point. 
4) From Stripe copy signing secret key.
5) Copy the key into the secret webhook key in config of firebase. 
6) Save the secret key and save the configuration.

### Add Products

1) In the Stripe dashboard, add the different subscription plans and their pricing
2) Then go to settings, and in the customer portal enable settings to 
   change subscription or cancel plans and add the products that were just created

### Branding 

### Go to firestore

1) Refresh the database, and you should see the newly created products show up in the firebase db.
2) Sign up a new user. Refresh the database and you should see the customer collection created 
   with details of this newly created user. 

###


