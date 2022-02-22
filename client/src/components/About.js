import React, { useEffect, useState } from "react";
import picafi from "../images/icon.JPG";
import pic from "../images/icon2.JPG";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="about-section">
      <>
        <div className="conttainer emp-profile">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={userData.name === "Aftab Najaf" ? picafi : pic}
                  alt="afi"
                />
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{userData.name}</h5>
                  <h6>Web-Developer</h6>
                  <p className="profile-rating mt-3 mb-5 ">
                    {" "}
                    Ranking <span>1/10 </span>
                  </p>

                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item-tb1">
                      <a
                        className="nsv=link-active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                      >
                        About
                      </a>
                    </li>

                    <li className="nav-item-tb1">
                      <a
                        className="nsv=link-active"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role={"tab"}
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cl-md-4">
                <div className="profile-work">
                  <p> WORK LINK</p>
                  <a
                    href="https://www.youtube.com/channel/UCRhrNUjQxICgF9ebqrurqGA"
                    target="_aftab"
                  >
                    YouTubr <i class="zmdi zmdi-youtube-play"></i>
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.facebook.com/aftab.si.1/"
                    target="_aftab"
                  >
                    Facebook <i class="zmdi zmdi-facebook"></i>
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.linkedin.com/in/aftabnajaf/"
                    target="_aftab"
                  >
                    Linkdin <i class="zmdi zmdi-linkedin"></i>
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.fiverr.com/users/aftabtabish/seller_dashboard"
                    target="_aftab"
                  >
                    Fiverr <i class="zmdi zmdi-code-setting"></i>
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.upwork.com/freelancers/~01816e5afac08af463"
                    target="_aftab"
                  >
                    Upwork <i class="zmdi zmdi-code-setting"></i>
                  </a>{" "}
                  <br />
                </div>
              </div>

              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <label> User ID </label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label> Name </label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Work</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.work}</p>
                      </div>
                    </div>
                    <div class="row ">
                      <div class="col-md-6">
                        <label>Hourly Rate </label>
                      </div>
                      <div class="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default About;
