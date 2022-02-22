import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //storng data in stata
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //send data backend

  const contactForm = async (e) => {
    try {
      e.preventDefault();

      const { name, email, phone, message } = userData;

      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        setUserData({ ...userData, message: "" });
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <section className="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p class="text-center w-responsive ms-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly.
          <br></br>
          Our team will come back to you within a matter of hours to help you.
        </p>

        <div className="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      value={userData.name}
                      onChange={handleInputs}
                    />
                    <i class="zmdi zmdi-account"> Name</i>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      value={userData.email}
                      onChange={handleInputs}
                    />
                    <i class="zmdi zmdi-email"> Email</i>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      class="form-control"
                      value={userData.phone}
                      onChange={handleInputs}
                    />
                    <i class="zmdi zmdi-phone"> Phone</i>
                  </div>
                </div>
                {/*
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" value={userData.message} onChange={handleInputs}/>
                            <i class="zmdi zmdi-laptop-chromebook">   Subject</i>
                        </div>
                    </div> */}
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                      value={userData.message}
                      onChange={handleInputs}
                    ></textarea>
                    <i class="zmdi zmdi-comment-text-alt"> Your Message</i>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  onClick={contactForm}
                >
                  Send Message
                </button>
              </div>
            </form>

            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <i class="zmdi zmdi-pin"></i>

                <p>I-10,Islamabad</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <i class="zmdi zmdi-phone-in-talk"></i>
                <p>(+923045514110)</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <i class="zmdi zmdi-email"></i>
                <p>aftabsial844@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
