import React, {useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import signpic from "../images/pic2.webp";

const Signup = () => {
 const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"", email:"", phone:" ",work:"", password:"", cpassword:""
    });
let name,value;

     const handleInputs=(e) => {
         name=e.target.name;
         value=e.target.value;
         setUser({...user, [name]:value})
     }
const PostData = async (e) => {
e.preventDefault();

const {name, email, phone, work, password, cpassword}=user;

const res = await fetch("/register",{
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        name, email, phone, work, password, cpassword
    })
});
const data = await res.json();

if(res.status === 422 || !data) {
window.alert("INVALID");
// console.log("INVALID");

} else {
    window.alert("Successfylly Register");
// console.log("Success");

navigate("/login");

}

}

    return <div >
        <>

            <section class="vh-100" style={{ backgroundColor: `#eee` }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderradius: 25 }} >
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form method="POST" class="mx-1 mx-md-4"  >

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" name="name" id="name" class="form-control"
                                                        value={user.name}
                                                        onChange={handleInputs}

                                                        placeholder='Your Name' />
                                                        <i class="zmdi zmdi-account-box"></i>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" name="email" id="email" class="form-control"
                                                        value={user.email}
                                                        onChange={handleInputs}

                                                        placeholder=' Your Email' />
                                                        <i class="zmdi zmdi-email"></i>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="phone" name="phone" id="phone" class="form-control"
                                                        value={user.phone}
                                                        onChange={handleInputs}

                                                        placeholder=' Your Phone' />
                                                        <i class="zmdi zmdi-phone"></i>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" name="work" id="work" class="form-control"
                                                        value={user.work}
                                                        onChange={handleInputs}

                                                        placeholder=' Your Profession' />
                                                        <i class="zmdi zmdi-slideshow"></i>

                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" name="password" id="password" class="form-control"
                                                        value={user.password}
                                                        onChange={handleInputs}

                                                        placeholder='Your Password' />
                                                        <i class="zmdi zmdi-lock"></i>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" name="cpassword" id="cpassword" class="form-control"
                                                        value={user.cpassword}
                                                        onChange={handleInputs}

                                                        placeholder='Confirm Password' />
                                                        <i class="zmdi zmdi-lock"></i>
                                                    </div>
                                                </div>


                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    {/* <button type="button" class="btn btn-primary btn-lg">Register</button> */}
                                                 <input type="submit" name="signup" id="signup" className="form-submit"
                                                 value="register" onClick={PostData} />

                                                </div>

                                            </form>



                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <div>
                                                <img src={signpic} class="img-fluid" alt="Sample " />



                                                <NavLink to="/login" style={({ isActive }) => ({
                                                    color: isActive ? '#fff' : '#545e6f',
                                                    background: isActive ? '#7600dc' : '#f0f0f0',
                                                    margin: 'auto'
                                                })}> Already Register</NavLink>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    </div>;
};

export default Signup;
