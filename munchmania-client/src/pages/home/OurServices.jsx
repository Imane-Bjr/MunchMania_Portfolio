import React from 'react'

const serviceLists = [
    {id:1, title: "Catering", des: "Transform your event into a culinary masterpiece.", img: "/images/home/services/icon1.png"},
    {id:2, title: "Fast delivery", des: "Experience the speed of gourmet with our swift delivery", img: "/images/home/services/icon2.png"},
    {id:3, title: "Online Ordering", des: "Discover a seamless experience with our online ordering", img: "/images/home/services/icon3.png"},
    {id:4, title: "Gift Cards", des: "Share the joy of dining with our exclusive Gift Cards", img: "/images/home/services/icon4.png"},
]

const OurServices = () => {
    return (
        <div id="services" className="section-container my-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="text-left md:w-4/5">
                <p className="subtitle">Our Services</p>
                <h2 className="title">Our Culinary Journey And Services</h2>
                <p className="my-5 text-[#534f73] leading-[30px]">
                    Driven by our love for the culinary arts, 
                    we craft memorable dining experiences that 
                    seamlessly blend exquisite flavors with 
                    heartfelt hospitality.
                </p>
    
                <button className="bg-violet font-semibold btn text-white px-8 py-3 rounded-full">
                  Explore
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                    {
                        serviceLists.map((service) => (
                            <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-violet cursor-pointer hover:border hover:border-[#4b0082] transition-all duration-200">
                                <img src={service.img} alt="" className=" mx-auto"/>
                                <h5 className="pt-3 font-semibold"> {service.title}</h5>
                                <p className="text-[#9848c6]">{service.des}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
          </div>
        </div>
      );
    };

export default OurServices