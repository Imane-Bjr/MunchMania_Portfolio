import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {
    // Initialize `react-hook-form` for form handling and validation.
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Destructure authentication functions from `AuthContext`.
    const { signUpWithGmail, login } = useContext(AuthContext);
    
    // State to handle and display error messages to the user.
    const [errorMessage, setErrorMessage] = useState("");

    // Initialize `useNavigate` to programmatically navigate to other routes.
    const navigate = useNavigate();

    // Function called on form submission to log in the user with email and password.
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        
        // Call the login function from the context provider.
        login(email, password)
            .then((result) => {
                // Successful login
                const user = result.user;
                alert("Login successful!");
                // Close the modal and navigate to the homepage.
                document.getElementById("my_modal_5").close();
                navigate('/'); // Redirect to the homepage after successful login.
            })
            .catch((error) => {
                // Set a custom error message on login failure.
                setErrorMessage("Provide a correct email and password!");
            });
    };

    // Function to handle Google login using the authentication provider.
    const handleRegister = () => {
        signUpWithGmail()
            .then((result) => {
                // Successful Google login
                const user = result.user;
                alert("Successful Login!");
                // Close the modal and navigate to the homepage.
                document.getElementById("my_modal_5").close();
                navigate('/'); // Redirect to the homepage after successful login.
            })
            .catch((error) => console.log(error));
    };

    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">
                <div className="modal-action flex flex-col justify-center mt-0">
                    {/* Form for user login */}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                        <h3 className="font-bold text-lg">Please Login!</h3>
                        
                        {/* Email input field with validation */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="email" 
                                className="input input-bordered" 
                                {...register("email", { required: "Email is required" })} // Validation rule for email
                            />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                        </div>

                        {/* Password input field with validation */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="password" 
                                className="input input-bordered" 
                                {...register("password", { required: "Password is required" })} // Validation rule for password
                            />
                            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover mt-2">Forgot password?</a>
                            </label>
                        </div>

                        {/* Display error messages if any */}
                        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}

                        {/* Submit button */}
                        <div className="form-control mt-6">
                            <input 
                                type="submit"
                                className="btn bg-violet text-white"
                                value="Login"
                            />
                        </div>

                        {/* Link to the signup page */}
                        <p className="text-center my-2">
                            Do not have an account? <Link to="/signup" className="underline text-red-700 ml-1"> Sign Up Now </Link>
                        </p>

                        {/* Close button for the modal */}
                        <button 
                            onClick={() => document.getElementById("my_modal_5").close()} // Close modal on click
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >✕</button>
                    </form>

                    {/* Social login buttons for Google, Facebook, and Github */}
                    <div className="text-center space-x-3 mb-5">
                        <button 
                            onClick={handleRegister} // Google login
                            className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                            aria-label="Login with Google" // Accessibility label
                        >
                            <FaGoogle />
                        </button>
                        <button 
                            className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                            aria-label="Login with Facebook" // Accessibility label
                        >
                            <FaFacebookF />
                        </button>
                        <button 
                            className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                            aria-label="Login with Github" // Accessibility label
                        >
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default Modal;