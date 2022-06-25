// import firebase from "firebase";
// // npm i firebase@8.10.0

// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: "AIzaSyBYGUD-zs8tEvMH_syknBxgCP8JaLsPWEc",
//     authDomain: "lpeonline.firebaseapp.com",
//     databaseURL:
//       "https://lpeonline-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "lpeonline",
//     storageBucket: "lpeonline.appspot.com",
//   });
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// export const db = firebase.firestore();

// export const rtdb = firebase.database();

// export const storage = firebase.storage();

// export const getList = (collection) =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .get()
//       .then((snapshot) => {
//         const result = [];

//         if (snapshot) {
//           snapshot.forEach((doc) => {
//             const uid = doc.id;
//             const data = doc.data();

//             data["id"] = uid;
//             result.push(data);
//           });

//           resolve(result);
//         }
//       })
//       .catch((err) => reject(err));
//   });

// export const getListWithOrderBy = (collection, field, type = "asc") =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .orderBy(field, type)
//       .get()
//       .then((snapshot) => {
//         const result = [];

//         if (snapshot) {
//           snapshot.forEach((doc) => {
//             const uid = doc.id;
//             const data = doc.data();

//             data["id"] = uid;
//             result.push(data);
//           });

//           resolve(result);
//         }
//       })
//       .catch((err) => reject(err));
//   });

// export const getListWithCustomField = (collection, field, value = "") =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .where(field, "==", value)
//       .get()
//       .then((snapshot) => {
//         const result = [];

//         if (snapshot) {
//           snapshot.forEach((doc) => {
//             const uid = doc.id;
//             const data = doc.data();

//             data["id"] = uid;
//             result.push(data);
//           });

//           resolve(result);
//         }
//       })
//       .catch((err) => reject(err));
//   });

// export const getDocById = (collection, id) =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .doc(id)
//       .get()
//       .then((snapshot) => {
//         const uid = snapshot.id;
//         const data = snapshot.data();

//         data["id"] = uid;

//         resolve(data);
//       })
//       .catch((err) => reject(err));
//   });

// export const create = (collection, dataSubmit) =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .add(dataSubmit)
//       .then((docRef) => {
//         resolve(docRef.id);
//       })
//       .catch((error) => {
//         reject(`Error adding document: ${error}`);
//       });
//   });

// export const removeById = (collection, id) =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .doc(id)
//       .get()
//       .then((snapshot) => {
//         snapshot.ref.delete();

//         resolve("success");
//       })
//       .catch((error) => {
//         reject(`Error delete document: ${error}`);
//       });
//   });

// export const updateById = (collection, id, dataUpdate) =>
//   new Promise((resolve, reject) => {
//     db.collection(collection)
//       .doc(id)
//       .update(dataUpdate)
//       .then((snapshot) => {
//         resolve("success");
//       })
//       .catch((error) => {
//         reject(`Error delete document: ${error}`);
//       });
//   });
