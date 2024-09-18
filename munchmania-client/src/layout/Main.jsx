import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'

const Main = () => {
    const {loading} = useContext(AuthContext);

    return (
        <div className='bg-primaryBG'>
            {
                loading ? <LoadingSpinner/> : <div>
                <Navbar/>
                {/* Using Outlet from where our children will be rendered from */}
                <div className="min-h-screen">
                    <Outlet/>
                </div>
                
                <Footer/>

            </div> 
                
            }
            
             
        </div>
       
    )
}

export default Main