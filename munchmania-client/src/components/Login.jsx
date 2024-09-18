import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    // Initialize `react-hook-form` for form handling and validation.
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Access authentication functions from `AuthContext`.
    const { login, signUpWithGmail } = useContext(AuthContext);

    // State to handle and display error messages to the user.
    const [errorMessage, setErrorMessage] = useState("");

    // Initialize `useNavigate` to programmatically navigate to other routes.
    const navigate = useNavigate();

    // Function to handle form submission for email and password login.
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        // Call the `login` function from the context provider.
        login(email, password)
            .then((result) => {
                // Successful login
                const user = result.user;
                alert("Login successful!");
                reset(); // Reset form fields after successful login.
                navigate('/'); // Redirect to the homepage after successful login.
            })
            .catch((error) => {
                // Handle errors during login
                const errorMessage = error.message;
                setErrorMessage(errorMessage); // Set error message to display to the user.
            });
    };

    // Function to handle Google login using the authentication provider.
    const handleGoogleLogin = () => {
        signUpWithGmail()
            .then((result) => {
                // Successful Google login
                const user = result.user;
                alert("Login with Google successful!");
                navigate('/'); // Redirect to the homepage after successful login.
            })
            .catch((error) => {
                console.log(error); // Log error to console for debugging purposes.
                setErrorMessage("Failed to login with Google. Try again.");
            });
    };

    return (
        <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 relative rounded-lg'>
            <div className="modal-action flex flex-col justify-center mt-0">
                {/* Login form for existing user authentication */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                    <h3 className="font-bold text-lg">Login To Your Account!</h3>

                    {/* Email input field with validation */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Email" 
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
                            placeholder="Password" 
                            className="input input-bordered" 
                            {...register("password", { required: "Password is required" })} // Validation rule for password
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                        <label className="label">
                            <a href="/forgot-password" className="label-text-alt link link-hover mt-2">
                                Forgot password?
                            </a>
                        </label>
                    </div>

                    {/* Display error messages if any */}
                    {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}

                    {/* Submit button for login */}
                    <div className="form-control mt-6">
                        <input 
                            type="submit"
                            className="btn bg-violet text-white"
                            value="Login"
                        />
                    </div>

                    {/* Link to signup page for new users */}
                    <p className="text-center my-2">
                        New here? 
                        <Link to="/signup">
                            <button className="ml-1 underline text-red-700">Create Account here</button>
                        </Link>
                    </p>

                    {/* Close button for the login form */}
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >✕
                    </Link> 
                </form>

                {/* Other login options using social accounts */}
                <div className="text-center space-x-3 mb-5">
                    <button 
                        className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                        onClick={handleGoogleLogin} // Google login handler
                        aria-label="Login with Google"
                    >
                        <FaGoogle />
                    </button>
                    <button 
                        className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                        aria-label="Login with Facebook"
                    >
                        <FaFacebookF />
                    </button>
                    <button 
                        className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                        aria-label="Login with Github"
                    >
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
