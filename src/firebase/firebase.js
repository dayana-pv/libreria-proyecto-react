import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "libreria-proyecto-react.firebaseapp.com",
  projectId: "libreria-proyecto-react",
  storageBucket: "libreria-proyecto-react.appspot.com",
  messagingSenderId: "911751552032",
  appId: "1:911751552032:web:912063e7bce23a1c6cb045",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar BDD
const bdd = getFirestore();

//CRUD Libros
export const createLibros = async () => {
  const promise = await fetch("./json/libros.json");
  const libros = await promise.json();
  libros.forEach(async (libro) => {
    await addDoc(collection(bdd, "libros"), {
      imagen: libro.imagen,
      nombre: libro.nombre,
      autor: libro.autor,
      categoria: libro.categoria,
      stock: libro.stock,
      precio: libro.precio,
    });
  });
};

export const getLibros = async () => {
  const libros = await getDocs(collection(bdd, "libros"));
  const items = libros.docs.map((libro) => {
    return { ...libro.data(), id: libro.id };
  });
  return items;
};

export const getLibro = async (id) => {
  const libro = await getDoc(doc(bdd, "libros", id));
  const item = { ...libro.data(), id: libro.id };
  return item;
};

export const updateLibro = async (id, info) => {
  await updateDoc(doc(bdd, "libros", id), info);
};

export const deleteLibro = async (id) => {
  await deleteDoc(doc(bdd, "libros", id));
};

//CREATE Y READ OrdenCompra

export const createOrdenCompra = async (
  cliente,
  precioTotal,
  carrito,
  fecha
) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
    cliente: cliente,
    items: carrito,
    precioTotal: precioTotal,
    fecha: fecha,
  });
  return ordenCompra;
};

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id));
  const item = { ...ordenCompra.data(), id: ordenCompra.id };
  return item;
};

export const deleteOrdenCompra = async (id) => {
  await deleteDoc(doc(bdd, "ordenCompra", id));
};
