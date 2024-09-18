import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider';

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;

        updateUserProfile(name, photoURL)
            .then(() => {
                // Profile updated!
                navigate(from, { replace: true });
                alert("Profile updated successfully");
            })
            .catch((error) => {
                // Handle errors during profile update
                alert("An error occurred while updating the profile.");
            });
    };

    return (
        <div className='h-screen max-w-md mx-auto flex items-center justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='font-bold text-center'>Update your Profile</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input 
                            type="text" 
                            {...register("name")} 
                            placeholder="Your name" 
                            className="input input-bordered" 
                            required 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Your Profile photo</span>
                        </label>
                        <input 
                            type="text" 
                            {...register("photoURL")} 
                            placeholder="photo url" 
                            className="input input-bordered" 
                            required 
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' value={"Update"} className="btn bg-violet text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;
