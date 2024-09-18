import React, { useEffect, useRef, useState } from 'react';
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import DishModal from '../../components/DishModal'; // Import the modal

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); //Number of items to display per page
    const [selectedDish, setSelectedDish] = useState(null); // State to hold the selected dish for the modal
    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

    const location = useLocation();
    const navigate = useNavigate();
    const itemsRef = useRef(null); // Create a ref for the items section

    // Scroll to Items
    const scrollToItems = () => {
      if (itemsRef.current) {
        itemsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/menu");
          const data = await response.json();
          setMenu(data);
          setFilteredItems(data); // Initially, display all items
        } catch (error) {
          console.error("Error fetching the data:", error);
        }
      };
      fetchData();
    }, []);

    // Handle category-based filtering
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get('category') || "all";

      if (category === "browse-all") {
        setFilteredItems(menu);
        setSelectedCategory("all");
      } else {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
      }
      setCurrentPage(1);
    }, [location.search, menu]);

    const handleCategoryChange = (category) => {
      const queryParams = new URLSearchParams();
      queryParams.set('category', category);
      navigate(`/menu?${queryParams.toString()}`);
    };

    const filterItems = (category) => {
      const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
      setFilteredItems(filtered);
      setSelectedCategory(category);
      setCurrentPage(1);
    };

    const showAll = () => {
      setFilteredItems(menu);
      setSelectedCategory("all");
      setCurrentPage(1);
    };

    // Handle sorting
    const handleSortChange = (option) => {
      setSortOption(option);
      let sortedItems = [...filteredItems];

      switch (option) {
        case "A-Z":
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A":
          sortedItems.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "low-to-high":
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        case "high-to-low":
          sortedItems.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
      setFilteredItems(sortedItems);
      setCurrentPage(1);
    };

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Open modal with selected dish details
    const onCardClick = (dish) => {
      setSelectedDish(dish);
      setModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
      setModalOpen(false);
      setSelectedDish(null);
    };

    return (
      <div>
        {/* Our menu banner */}
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] from-0% to [#F2F3F2] to-100%'>
          <div className="py-48 flex flex-col items-center justify-center gap-8">
            {/* Content of the banner */}
            <div className="text-center px-4 space-y-7">
              <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                Indulge in a Feast of <span className="text-violet">Flavors</span>
              </h2>
              <p className="text-[#534f73] text-xl md:w-4/5 mx-auto">
                Bring your loved ones and savor the joy of delectable dishes 
                like Stir-Fried Chicken, Carbonara, Soy Glazed Cod, 
                Cheese Tteokbokki, Neapolitan Pizza, and more—all at a price 
                that delights as much as the food.
              </p>
              <button
                onClick={scrollToItems}
                className="bg-violet font-semibold btn text-white px-8 py-3 rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div ref={itemsRef} className="section-container">
          <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
            {/* Category Filter */}
            <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
              <button onClick={showAll} className={selectedCategory === "all" ? "active" : ""}>All</button>
              <button onClick={() => filterItems("salad")} className={selectedCategory === "salad" ? "active" : ""}>Salad</button>
              <button onClick={() => filterItems("pizza")} className={selectedCategory === "pizza" ? "active" : ""}>Pizza</button>
              <button onClick={() => filterItems("soup")} className={selectedCategory === "soup" ? "active" : ""}>Soups</button>
              <button onClick={() => filterItems("dessert")} className={selectedCategory === "dessert" ? "active" : ""}>Desserts</button>
              <button onClick={() => filterItems("drinks")} className={selectedCategory === "drinks" ? "active" : ""}>Drinks</button>
            </div>

            {/* Sorting Filter */}
            <div className="flex justify-end mb-4 rounded-sm">
              <div className="bg-[#481b53] p-2 ">
                <FaFilter className="text-white h-4 w-4" />
              </div>
              <select id="sort" onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className="bg-[#481b53] text-white px-2 py-1 rounded-sm">
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>

            {/* Dish Cards */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
              {currentItems.map((item, index) => (
                <Cards key={index} item={item} onCardClick={() => onCardClick(item)} />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8 flex-wrap gap-2">
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-violet text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <DishModal dish={selectedDish} isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    );
};

export default Menu;