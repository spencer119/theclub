import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
const Admin = ({ db }) => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "swim-lessons"));
      const swimLessons = [];
      querySnapshot.forEach((doc) => {
        swimLessons.push({ id: doc.id, ...doc.data() });
      });
      console.log(swimLessons);
      setLessons(swimLessons);
    };
    getData();
  }, []);
  const handleDownload = async () => {
    const querySnapshot = await getDocs(collection(db, "swim-lessons"));
    const emails = querySnapshot.docs.map((doc) => doc.data().email).join(", ");

    // Create a Blob from the emails string
    const blob = new Blob([emails], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "swim-lessons-emails.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <div>
      <button onClick={handleDownload}>Download Data</button>
    </div>
  );
};

export default Admin;
