import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import WriteToCloudFireStore from "../components/cloudfirestore/Write";
import DisplayData from "../components/cloudfirestore/Write";
import Test from "../components/test";
import { useState, useEffect } from "react";
import Penalty from "../components/penalty";
import { onSnapshot, orderBy, query, collection } from "firebase/firestore";
import db from "../firebase/init";


export default function Home() {
  const [selected, setSelected] = useState();
  const [lendings, setLendings] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "lendings");
    const q = query(collectionRef, orderBy("start_date", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setLendings(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          return_date: doc.data().return_date?.toDate().getTime(),
          end_date: doc.data().end_date?.toDate().getTime(),
          start_date: doc.data().start_date?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  const handleSelection = (lending) => {
    console.log(lending);
    setSelected(lending);
  }

  return (
    <>
      <Test lendings={lendings} handleSelection={handleSelection}/>
      <Penalty selected={selected}/>
      </>
  );
}
