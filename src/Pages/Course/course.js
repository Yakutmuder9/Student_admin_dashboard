import { useState, useEffect } from "react";
import { db } from "../../Auth/firebase/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function Course() {
  const [enrolled, setEnrlled] = useState([]);
  const courseaEnrolledRef = collection(db, "enrollment");

  const deleteUser = async (id) => {
    const userDoc = doc(db, "enrollment", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(courseaEnrolledRef);
      setEnrlled(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="bg-dark p-3">
      <div className="ourCourse">
        {enrolled.map((cor, key) => {
          return (
            <div
              className="coursegrops d-flex flex-column justify-content-between align-items-space-btween shadow-lg bg-dark mb-2 rounded p-4"
              id={cor.courseNum}
              key={key}
            >
              <div className="imgPart">
                <img src={cor.url} alt="" className="w-100 h-50" />
              </div>
              <div className="descpart p-4 overflow-hidden">
                <h5 className="overflow-hidden">{cor.titel}</h5>
                <p>{cor.dicription}</p>
              </div>
              <div
                className="d-flex bg-secondary justify-content-between w-100"
                id="parentCourse"
              >
                <h5 className="pt-2 ps-2 overflow-hidden">{cor.group}$</h5>
                <button
                  className="btn btn-success addToCartbtn ripple"
                  id={cor.courseNum}
                  onClick={() => {
                    deleteUser(cor.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Course;
