import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/Errorpage/ErrorPage";
import Dashboard from "./Pages/Dashboard/dashboard";
import DashActivity from "./Pages/Dashboard/DashActive/DashActivity";
import HomePage from "./Pages/HomePage/home";
import Course from "./Pages/Course/course";
import Event from "./Pages/Event/event.js";
import Inbox from "./Pages/Inbox/inbox";
import Resources from "./Pages/Resource/Resources";
import Profile from "./Pages/Profile/Profile";
import CourseStore from "./Pages/Course/Coursestore/CourseStore";
import Help from "./Pages/Help/help";
import ProtectedRoute from "./Auth/firebase/ProtectedRoutes";
import { UserAuthContextProvider } from "./Auth/firebase/UserAuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./Auth/firebase/firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App ">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {user ? (
            <Route
              path="dashboard/"
              element={
                <ProtectedRoute>
                  <Dashboard authorised={true} />
                </ProtectedRoute>
              }
            >
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <DashActivity />
                  </ProtectedRoute>
                }
              />
              <Route
                path="courses"
                element={
                  <ProtectedRoute>
                    <Course />
                  </ProtectedRoute>
                }
              />
              <Route
                path="event"
                element={
                  <ProtectedRoute>
                    <Event />
                  </ProtectedRoute>
                }
              />
              <Route
                path="inbox"
                element={
                  <ProtectedRoute>
                    <Inbox />
                  </ProtectedRoute>
                }
              />

              <Route
                path="resources"
                element={
                  <ProtectedRoute>
                    <Resources />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="help"
                element={
                  <ProtectedRoute>
                    <Help />
                  </ProtectedRoute>
                }
              />
              <Route
                path="getcourse"
                element={
                  <ProtectedRoute>
                    <CourseStore />
                  </ProtectedRoute>
                }
              />
            </Route>
          ) : (
          // <Route path="*" element={<ErrorPage />} />
         
            <Route
              path="*"
              element={
                <div className="transition-page overflow-auto">
                <div className="transtion-box  position-absolute">
                  <span className="wave-item "></span>
                  <span className="wave-item "></span>
                  <span className="wave-item "></span>
                  <span className="wave-item "></span>
                  <span className="wave-item "></span>
                </div>
              </div>
              }
            />
          )}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
