import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const staticUserCredentials = [
  {
    username: "john.doe",
    password: "password123",
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    username: "jane.doe",
    password: "password321",
    id: 2,
    name: "Jane Doe",
    profilePic:
      "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (username, password) => {
    const user = staticUserCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      console.log("There is an error while trying to authenticate a user");
    }
    console.log(user);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  console.log(currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
