import React, { useContext } from 'react';
import useCart from '../../hooks/useCart';
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from '../../contexts/AuthProvider';

const CartPage = () => {
    const [cart, refetch] = useCart(); 
    const { user } = useContext(AuthContext);

    // Calculate Price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    };

    // Increase number of items in cart
    const handleIncrease = (item) => {
        fetch(`http://localhost:5000/carts/${item._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: item.quantity + 1 }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                // Refetch cart data from server to update the frontend
                refetch();
            }
        });
    };

    // Decrease number of items in cart
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity: item.quantity - 1 }),
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // Refetch cart data from server to update the frontend
                    refetch();
                }
            });
        } else {
            alert("Number of dishes can't be zero");
        }
    };

    // Calculate the total price of all items in cart
    const cartSubtotal = cart.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    // Delete an item from cart
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#be7ef2",
            cancelButtonColor: "#e1551e",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="section-container">
            {/* Page Banner */}
            <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to [#F2F3F2] to-100%'>
                <div className='py-24 flex flex-col justify-center items-center gap-8'>
                    <div className='space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
                            Items added to <span className='text-violet'>Your Cart</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Cart Table */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-violet text-white rounded-sm">
                            <tr>
                                <th>#</th>
                                <th>Dish</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-medium'>{item.name}</td>
                                    <td>
                                        <button className="btn btn-xs" onClick={() => handleDecrease(item)}>-</button>
                                        <input
                                            className="w-10 mx-2 text-center overflow-hidden appearance-none"
                                            type="number"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <button className="btn btn-xs" onClick={() => handleIncrease(item)}>+</button>
                                    </td>
                                    <td>${calculateTotalPrice(item).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs text-red-600 border-none" onClick={() => handleDelete(item)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Customer Total Details */}
            <div className="flex flex-col md:flex-row justify-between items-start my-12 gap-8">
                <div className='md:w-1/2 space-y-3'>
                    <h3 className="text-lg font-semibold">Total Details</h3>
                    <p>Name: {user?.displayName || "None"}</p>
                    <p>Email: {user?.email}</p>
                    <p>User_id: <span className="text-sm">{user?.uid}</span></p>
                </div>
                <div className='md:w-1/2 space-y-3'>
                    <h3 className="text-lg font-semibold">Shopping Details</h3>
                    <p>Total Items: {cart.length}</p>
                    <p>Total Price: ${cartSubtotal.toFixed(2)}</p>
                    <button className="btn btn-md bg-purple-500 text-white px-8 py-1">
                        Let's CheckOut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
