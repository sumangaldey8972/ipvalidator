import React from "react";
import { Route, Routes } from "react-router-dom";
import Check from "./Check";
import PrivateRoute from "./PrivateRoutes";
import SignIn from "./Signin";
import SignUp from "./Signup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/ipcheck"
          element={
            <PrivateRoute>
              <Check />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
