import { createContext } from "react";
import { useEffect, useState } from "react";

const Context = () => {
  // create a context for page
  const AuthContext = createContext({
    isAuthenticated: false,
    user: {
      Name: "Damola Darl",
      Email: "oyin@yahoo.com",
      Username: "Zucci",
    },
  });

  //define context provider
  //function AuthProvider(Props) {
  const AuthProvider = (Props) => {
    return (
      <AuthContext.Provider
        user={{
          isAuthenticated: false,
          user: {
            Name: "Damola Darl",
            Email: "oyin@yahoo.com",
            Username: "Zucci",
          },
        }}
      >
        {Props.children}
      </AuthContext.Provider>
    );
  };

  //}

   const userProfile = () => {
    return (
      <div className="useContext">
        <h1>User Profile</h1>
        <p>Name: Oyindamola Kushimo</p>
        <p>Email: damola@gmail.com</p>
        <p>Username: Ballerina</p>
      </div>
    );
  };

  return (
    //define user profile
//     <div className="useContext">
//     <h1>User Profile</h1>
//     <p>Name: Oyindamola Kushimo</p>
//     <p>Email: damola@gmail.com</p>
//     <p>Username: Ballerina</p>
//   </div>

    <AuthProvider>
      <div className="Mcontain">
        <userProfile />
      </div>
    </AuthProvider>
  );
};

export default Context;
