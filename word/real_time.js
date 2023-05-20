
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore,doc,addDoc,setDoc,collection,onSnapshot   } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNk2maGCUh4NnLhV3mKvMpTmx5uYkcH-g",
    authDomain: "all-in-one-aio.firebaseapp.com",
    databaseURL: "https://all-in-one-aio-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "all-in-one-aio",
    storageBucket: "all-in-one-aio.appspot.com",
    messagingSenderId: "752140232690",
    appId: "1:752140232690:web:3050f7cc5947a4be0d6d6b"
};
  const app =await initializeApp(firebaseConfig);
const db=await  getFirestore(app);
let xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:6464/AIO/All%20in%20One/server_files/php/fetch_current.php", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({}));
if (xhr.readyState === XMLHttpRequest.DONE){
    console.log(xhr.responseText);
    const realTimeLister = await onSnapshot(doc(db, "docs",xhr.responseText), (doc) => {
        let editor = tinymce.get('myTextarea');
        editor.setContent(doc.data()['text']);
        console.log(doc.data()['text']);
    });
}
 export async function updateReal(current,text) {
    const ref = doc(db, 'docs', current);
    await setDoc(ref, {text: text}, {merge: true});
}
export  async function addReal(current){
    const ref = doc(db, 'docs', current);
    await setDoc(ref, {text: ""}, {merge: true});
}



