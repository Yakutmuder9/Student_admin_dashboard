import { useEffect, useState } from "react";
import { db } from "../../../Auth/firebase/firebase";
// import firebase from 'firebase/compat/app';
import "./CourseStore.css";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const CourseStore = () => {
  const [courseFilter, setCourseFilter] = useState([]);
  const [paymentModal, setPayemnetModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const showCourseRef = collection(db, "course");
  const courseFilterRef = collection(db, "enrollment");

  const chackEnrollCourse = async () => {
    const chack = await getDocs(courseFilterRef);
    setCourseFilter(chack.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  chackEnrollCourse();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(showCourseRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));






  //   let newbtn = showCourseRef.filter((e) => e.group === 1);
  //   let bignner = showCourseRef.filter((e) => e.group === 2);
  //   let popular = showCourseRef.filter((e) => e.group === 3);
  function newBtnHadler() {
    // setCourseFilter(newbtn);
  }
  function BignnerBtnHadler() {
    // setCourseFilter(bignner);
  }
  function PopularBtnHadler() {
    // setCourseFilter(popular);
  }

  const createEnrolledCourse = async (id, url, titel, dicription, group) => {
    const found = courseFilter.find((obj) => {
      return obj.id === id;
    });

    if (found) {
      console.log('already enrolled')
      return setPayemnetModal(false);
    } else {
      // window.location.reload(false);
      console.log("payment")
      return setPayemnetModal(true);
    }

    await setDoc(doc(db, "enrollment", id), {
      url: url,
      titel: titel,
      dicription: dicription,
      group: group,
    });
  };

  return (
    <div className=" justify-content-between mx-3" id="courseShow">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h2 className="font-weight-bold overflow-hidden">
            Availabel Courses{" "}
          </h2>
          <p className="select-text">Select and Purchase as you like</p>
        </div>

        <div
          className="btn-group h-50 w-50 d-flex shadow"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            id="button"
            className="btn btn-outline-success text-white"
            onClick={() => newBtnHadler()}
          >
            New
          </button>
          <button
            type="button"
            id="button"
            className="btn btn-outline-success text-white"
            onClick={() => BignnerBtnHadler()}
          >
            Bignner
          </button>
          <button
            type="button"
            id="button"
            className="btn btn-outline-success text-white"
            onClick={() => PopularBtnHadler()}
          >
            Popular
          </button>
        </div>
      </div>
      <div className="ourCourse">
        {courses.map((course, key) => {
          return (
            <div
              className="coursegrops d-flex flex-column justify-content-between align-items-space-btween shadow-lg bg-dark mb-2 rounded p-4"
              id={course.courseNum}
              key={key}
            >
              <div className="imgPart">
                <img src={course.url} alt="" className="w-100 h-50" />
              </div>
              <div className="descpart p-4 overflow-hidden">
                <h5 className="overflow-hidden">{course.titel}</h5>
                <p>{course.dicription}</p>
              </div>
              <div
                className="d-flex bg-secondary justify-content-between w-100"
                id="parentCourse"
              >
                <h5 className="pt-2 ps-2 overflow-hidden">{course.group}$</h5>
                <button
                  className="btn btn-success addToCartbtn"
                  id={course.courseNum}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    createEnrolledCourse(
                      course.id,
                      course.url,
                      course.titel,
                      course.dicription,
                      course.group
                    );
                  }}
                >
                  Buy Course
                </button>
               
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            the item is already enrolled
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseStore;
