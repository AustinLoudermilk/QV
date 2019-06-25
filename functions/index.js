const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotifaction = ((notifaction) => {
    return admin.firestore()
        .collection('notifactions')
        .add(notifaction)
        .then(doc => console.log(doc, 'notifaction added'));
});

exports.newUser = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notifaction = {
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    content: ' created a new account.',
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotifaction(notifaction);
            })
});