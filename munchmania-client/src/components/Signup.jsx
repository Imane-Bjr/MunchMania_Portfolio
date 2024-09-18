import React, { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';

const Signup = () => {
    // Initialize `react-hook-form` for form handling and validation.
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Destructure `createUser` function from the `AuthContext`.
    const { createUser } = useContext(AuthContext);

    // Initialize `useNavigate` to programmatically navigate to other routes.
    const navigate = useNavigate();

    // Function to handle form submission for user signup.
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        // Call the `createUser` function to create a new user with email and password.
        createUser(email, password)
            .then((result) => {
                // Successful account creation
                const user = result.user;
                alert("Account creation successful!");
                reset(); // Reset form fields after successful account creation.
                navigate('/'); // Redirect to the homepage after successful signup.
            })
            .catch((error) => {
                // Handle errors during account creation
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);  // Display error message to the user.
            });
    };

    return (
        <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 relative rounded-lg'>
            <div className="modal-action flex flex-col justify-center mt-0">
                {/* Signup form for new user registration */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                    <h3 className="font-bold text-lg">Create Your Account!</h3>

                    {/* Email input field with validation */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="input input-bordered" 
                            {...register("email", { required: "Email is required" })}  // Validation rule for email
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
                            {...register("password", { required: "Password is required" })}  // Validation rule for password
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                        <label className="label">
                            <a href="/forgot-password" className="label-text-alt link link-hover mt-2">
                                Forgot password?
                            </a>
                        </label>
                    </div>

                    {/* Submit button for signup */}
                    <div className="form-control mt-6">
                        <input 
                            type="submit"
                            className="btn bg-violet text-white"
                            value="Sign Up"
                        />
                    </div>

                    {/* Link to login page for users who already have an account */}
                    <p className="text-center my-2">
                        You have an account? 
                        <Link to="/login">
                            <button className="ml-1 underline text-red-700">Login here</button>
                        </Link>
                    </p>

                    {/* Close button for the signup form */}
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
                        aria-label="Sign up with Google"  // Accessibility label
                    >
                        <FaGoogle />
                    </button>
                    <button 
                        className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                        aria-label="Sign up with Facebook"  // Accessibility label
                    >
                        <FaFacebookF />
                    </button>
                    <button 
                        className="btn btn-circle hover:bg-[#4e0d86] hover:text-white"
                        aria-label="Sign up with Github"  // Accessibility label
                    >
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;