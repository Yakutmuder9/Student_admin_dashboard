import { useEffect, useState } from "react";
import { db } from "../../../Auth/firebase/firebase";
// import firebase from 'firebase/compat/app';
import "./CourseStore.css";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import Course from "../course";

const CourseStore = () => {
  const [courseFilter, setCourseFilter] = useState();
  const [courses, setCourses] = useState([]);
  const showCourseRef = collection(db, "course");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(showCourseRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

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
    await setDoc(doc(db, "enrollment", id), {
      url: url,
      titel: titel,
      dicription: dicription,
      group: group,
    });
  };

  return (
    <div className=" justify-content-between mx-3">
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
                  className="btn addToCartbtn"
                  id={course.courseNum}
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseStore;
