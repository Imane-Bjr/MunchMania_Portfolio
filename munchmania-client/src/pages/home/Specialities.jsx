import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import DishModal from '../../components/DishModal';

// Rename components to PascalCase
const SimpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            NEXT
        </div>
    );
};

const SimplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
};

const Specialities = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null);
    const [selectedDish, setSelectedDish] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then((res) => res.json())
            .then((data) => {
                const specials = data.filter((item) => item.category === "popular");
                setRecipes(specials);
            });
    }, []);

    const onCardClick = (dish) => {
        setSelectedDish(dish);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedDish(null);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />,
    };

    return (
        <div id="specialities" className='section-container my-20 relative'>
            <div className='text-left'>
                <p className='subtitle'>Special Dishes!</p>
                <h2 className='title md:w-[520px]'>Signature Delights In Our Menu</h2>
            </div>
            {/* Arrows buttons style */}
            <div className="absolute right-3 top-12 mb-10 mr-24 z-20">
                <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5">
                    <FaAngleLeft className="h-8 w-8 p-1" />
                </button>
                <button onClick={() => slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 bg-violet">
                    <FaAngleRight className="h-8 w-8 p-1" />
                </button>
            </div>

            <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5 z-10">
                {recipes.map((item, i) => (
                    <Cards key={i} item={item} onCardClick={onCardClick} />
                ))}
            </Slider>

            {/* Render the dish modal */}
            {isModalOpen && (
                <DishModal dish={selectedDish} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </div>
    );
}

export default Specialities;
