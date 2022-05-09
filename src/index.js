import {initializeApp} from 'firebase/app'
import{
    getFirestore, collection, getDoc, addDoc, onSnapshot, doc,signOut
} from 'firebase/firestore'

import {
  getAuth, createUserWithEmailAndPassword
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD07Pluw5ONoIblf16nh84YrkNFbWefNDo",
    authDomain: "elad-9e511.firebaseapp.com",
    databaseURL: "https://elad-9e511.firebaseio.com",
    projectId: "elad-9e511",
    storageBucket: "elad-9e511.appspot.com",
    messagingSenderId: "171317393227",
    appId: "1:171317393227:web:6b6e277bd732049f585ace",
    measurementId: "G-2YEQ21E3KX"
};


initializeApp(firebaseConfig)

const db = getFirestore();
const auth = getAuth()

const colref = collection(db,"users")   


onSnapshot(colref, (snapshot) => {
  let users = []
  snapshot.docs.forEach(doc => {
    users.push({ ...doc.data(), id: doc.id })
  })
  console.log(users)
})



  const adduserform = document.querySelector('.add')
  adduserform.addEventListener('submit', (e) => {
    e.preventDefault()

    // addDoc(colref, {
    //   date : adduserform.birthdate.value,
    //   email : adduserform.email.value,
    //   lastname : adduserform.lastname.value,
    //   name : adduserform.firstname.value,
    //   password : adduserform.password.value

    // })

    const email = adduserform.email.value
    const password = adduserform.password.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user add", cred.user)
      adduserform.reset()
    })
    .cath((err) => {
      console.log(err.message)
    })
  
})

// const docRef = doc(db, 'users', '7wY4qsOOy2C1aZB0gRSv')



// onSnapshot(docRef, (doc) => {
//   console.log(doc.data(), doc.id)
// })


const loginbtn = document.querySelector(".signin")
const logoutButton = document.querySelector('.logout')

logoutButton.addEventListener('click', () => {
  alert("preesed")
      // signOut(auth)
      //   .then(() => {
      //     console.log('user signed out')
      //   })
      //   .catch(err => {
      //     console.log(err.message)
      //   })
})

loginbtn.addEventListener("submit", (e) => {
  e.preventDefault()
})

