import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";

// const SaveRecetas =(receta: Receta) => {try {
//     const docRef = await SaveProduct(product(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);