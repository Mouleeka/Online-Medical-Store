import React from 'react'
import {Link} from 'react-router-dom'
import { MoveRight } from 'lucide-react';
import { Truck } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { BadgePercent } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import P1 from '../Asserts/Images/Product 1.jpg'
import P2 from '../Asserts/Images/Product 4.jpg'
import P3 from '../Asserts/Images/Product 3.jpg'
import P4 from '../Asserts/Images/Product 2.jpg'
import p8 from '../Asserts/Images/Product 6.jpg';
import Nav from '../Components/Nav.js';
import '../Asserts/Styles/Home.css';
import Footer from '../Components/Footer.js';
 import Homeproduct from '../Components/Homeproduct.js';
function Home()
{
    return(
       <>
       <Nav />
        <div className='top_banner'>
            <div className='cantainer'>
                <div className='detail'>
                    {/* <h2>The Best Medicines Collection from 2002</h2> */}
                    <center>
                    <h2> Med Center</h2>
                    </center>
                    <Link to= '/products' className='link'>Shop Now <MoveRight /></Link>
                </div>
                <div className='img_box'>
                    <img src={P1} alt='sliderimg' ></img>
                </div>
            </div>
        </div>
        <div className='product_type'>
           <div className='cantainer'>
            <div className='box'>
                <div className='img_box'>
                    <img src={P2} alt='product4'></img>
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src={P3} alt='product3'></img>
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src={P4} alt='product7'></img>
                </div>
                <div className='detail'>
                    <p>63 products</p>
                </div>
            </div>
           </div>
        </div>
        <div className='about'>
            <div className='cantainer'>
                <div className='box'>
                    <div className='icon'>
                    <Truck />
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                        <p>Order abouve $1000</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <BadgeDollarSign />
                    </div>
                    <div className='detail'>
                        <h3>Return & Refund </h3>
                        <p>Money back Gaurenty</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <BadgePercent />
                    </div>
                    <div className='detail'>
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='product'>
            <h2>Top Products</h2>
            <div className='cantainer'>
                {
                    Homeproduct.map((curElm) =>
                    {
                        return(
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                    <div className='icon'>
                                      <li><ShoppingCart /></li>
                                        <li><Eye /></li>
                                        <li> <Heart /></li>
                                    </div>
                                </div>
                                <div className='detail'>
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>{curElm.Price}</h4>
                                    </div>
                            </div> 
                        )
                        })
                }
            </div>
        </div>
        
             <Footer/> 
        </>
    )
}
export default Home;