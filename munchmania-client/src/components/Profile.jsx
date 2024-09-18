import React, { useContext } from 'react';
import avatarImg from '/images/avatars/avatar.png'
import { AuthContext } from '../contexts/AuthProvider';

const Profile = ({ user }) => {

    const {logOut} = useContext(AuthContext);
    const handelLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            navigate("/")
          })
          .catch((error) => {
            console.log(error);
          });
    };

  // Helper function to determine if the provided photoURL is Google's default profile image.
  const isGoogleDefaultImage = (photoURL) => {
    // Check for Google's default profile image URL pattern.
    return photoURL.includes('lh3.googleusercontent.com') && photoURL.includes('=s96-c');
  };

  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full overflow-hidden">
              {user.photoURL && !isGoogleDefaultImage(user.photoURL) ? (
                <img
                  alt="User Avatar"
                  src={user.photoURL}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  alt="Default Avatar"
                  src={avatarImg}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a href='/update-profile'>Profile</a></li>
            <li><a>Order</a></li>
            <li><a>Dashboard</a></li>
            <li><a onClick={handelLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
