import React, { useContext, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Cards = ({ item, onCardClick }) => {
    const {name, image, price, recipe, _id } = item;
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const {user} = useContext(AuthContext);
    const [cart, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();



    //Add to cart btn 
    const handleAddToCart = (item) => {
        //console.log("btn clicked", item)
        if(user && user?.email){
            const cartItem = {menuItemId : _id, name, quantity: 1, image, price, email: user.email};
            //console.log(cartItem)
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(cartItem)

            }).then(res => res.json()).then(data => {
                //console.log(data)
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Dish added to cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                }
            });
        } else {
            Swal.fire({
                title: "Please login!",
                text: "To order the food, you need an account",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#be7ef2",
                cancelButtonColor: "#e1551e",
                confirmButtonText: "Login now!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              });
        }
    };

    const handleHeartClick = (event) => {
        event.stopPropagation(); // Prevent click event from propagating to parent elements
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div className="card bg-base-100 relative mr-5 md:my-5 shadow-xl z-10">
            <div 
            className={`rating gap-1 absolute left-0 top-0 p-2 heartStar bg-violet cursor-pointer 
                ${isHeartFilled ? "text-[#ff746c]" : "text-white"}`}
            onClick={handleHeartClick}
            style={{ borderRadius: '0 20px 0 20px', width: '50px', height: '50px' }}  // Almond shape with two 90-degree corners
            >
            <FaHeart className="w-5 h-5 mx-auto" />
            </div>


            <figure className='relative'>
                <img
                    src={item.image}
                    alt="Dishes"
                    className="hover:scale-105 transition-all duration-300 md:h-72"
                    onClick={() => onCardClick(item)}
                    style={{ padding: '10px', boxSizing: 'border-box' }}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}!</h2>
                
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">
                        <span className="text-sm text-[#ff3232]">$ </span> {item.price}
                    </h5>
                    <button className="btn bg-violet text-white" onClick={() => handleAddToCart(item)}>Add To Cart!</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;
