import React, { useState, useEffect } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);

      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <>
        <div class="split left">
          <div class="centered">
            {/* <h1>With</h1> */}
            {/* <h1>{userName}</h1>
    <h1>Please Login</h1> */}

            <h1>{show ? userName : "Please Login"}</h1>
          </div>
        </div>
        <div class="split right">
          <div class="centered">
            {/* <h1>Afi</h1> */}
            <h2>{show ? "Welcome To Login" : "We Are The MERN"}</h2>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
