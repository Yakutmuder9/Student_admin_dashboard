import "./dashactive.css";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Auth/firebase/firebase";
import nothing from "../../../App/assets/images/nothing.svg";
import { Link } from "react-router-dom";
import { db } from "../../../Auth/firebase/firebase";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  {SpinnChart ,ProgressChart ,CourseProgressTabel}  from "./SpinnChart";

const DashActivity = () => {
  const [user] = useAuthState(auth);
  const [showCourse, setShowCourse] = useState(true);
  const [activeDashCourse, setActiveDashCourse] = useState([]);
  const dashEnrolledRef = collection(db, "enrollment");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(dashEnrolledRef);
      setActiveDashCourse(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUsers();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="dashActive  px-4 py-3">
      {showCourse ? (
        <>
          <div>
            <div>

              <div className="row ">
                <div className="col-lg-8  mb-3">
                  <div className="dashCourseFade"></div>
                  <div className="p-2" id="dashCourse">
                    <div className="d-flex justify-content-between mb-3 px-2 mb-2 align-items-start">
                      <div className="  overflow-hidden">
                        <h4 className=" overflow-hidden">
                          Course in progress{" "}
                          <span className="text-success"> . . .💓</span>
                        </h4>
                      </div>
                      <div className="d-flex align-items-end ">
                        <h6 className="overflow-hidden pt-2 text-secondary me-5 ">
                          Add course
                        </h6>
                      </div>
                      <div className="d-flex justify-content-end position-absolute w-100  py-1 pe-4 mb-2  ">
                     <a href="dashboard/getcourse">  <button className="btn btn-success rounded-circle overflow-hidden mb-2 ripple">
                          +
                        </button></a> 
                      </div>
                    </div>

                    <div className="" id="activeCoursebody">
                      <Slider {...settings} className="cardmap">
                        {activeDashCourse.map((active, key) => {
                          return (
                            <div
                              className="card h-100 mx-4 my-2"
                              style="width: 18rem;"
                              key={key}
                              id="showCard"
                            >
                              <img
                                src={active.url}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body bg-dark">
                                <p className="card-title">
                                  {active.titel.substring(0, 16)}..
                                </p>
                                <a href="#" className="btn btn-success ripple">
                                  Go ..
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <div className="overflow-hidden" id="dashlevel">
                  
                  <ProgressChart/>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8 mb-3">
                  <div className="dashCourseFade"></div>
                  <div className=" " id="dashGrade">
                    rdd 3
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <div className=" overflow-hidden " id="dashFullfil">
                    <SpinnChart />
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-lg-4  mb-3">
                  <div className="" id="dashGPA">
                    col-sm-5
                  </div>
                </div>
                <div className="col-lg-8  mb-3">
                  <div className="" id="dashHourse">
                    <CourseProgressTabel />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      ) : (
        <div className="vh-auto w-100  d-flex align-items-center justifiy-content-center flex-column">
          <img src={nothing} alt="" className="h-50 w-50 overflow-hidden" />
          <h1 className="overflow-hidden">Welcome!</h1>
          <p>Your favorite course, data and todo lists show up here.</p>
          <Link to="getcourse" className="btn btn-secondary  mb-3 ">
            Add Courses/Todo's
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashActivity;
