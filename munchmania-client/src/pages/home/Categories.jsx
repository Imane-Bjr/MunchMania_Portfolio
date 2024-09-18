import React from 'react'
import { useNavigate } from 'react-router-dom';

const categoryItems = [
    {id: 1, title: "Pizzas", descript: "(13 pizzas)", image: "/images/home/Categories/pizza3.png", category: "pizza"},
    {id: 2, title: "Soups", descript: "(11 soups)", image: "/images/home/Categories/soup5.png", category: "soup"},
    {id: 3, title: "Desserts", descript: "(14 desserts)", image: "/images/home/Categories/cat3.png", category: "dessert"},
    {id: 4, title: "Browse All", descript: "(67 Items)", image: "/images/home/Categories/cat4.png", category: "all"}
];

const Categories = () => {
    const navigate = useNavigate();


    const handleCategoryClick = (category) => {
        if (category === "all") {
          navigate("/menu"); // Navigate to menu page without a category
        } else {
          navigate(`/menu?category=${category.toLowerCase()}`); // Navigate with category
        }
      };


  return (
    <div id= "categories" className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Our Top Picks!</p>
            <h2 className='title'>Popular Categories</h2>
        </div>

        {/* list of our main propular categories in form of cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'
                    onClick={() => handleCategoryClick(item.category)}
                    >
                        <div className='w-full mx-auto flex items-center justify-center'>
                            <img src={item.image} alt="" className='bg-[#fdd7c8] p-5 rounded-full w-28 h-28'/>
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#201f2c] font-semibold'>{item.title}</h5>
                            <p className='text-[#ff3232] text-sm'>{item.descript}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Categories
