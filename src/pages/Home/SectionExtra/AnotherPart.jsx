import React from 'react';
import quote from '../../../assets/354557480_1202134437069628_4923491936911812740_n.png'
import quotes from '../../../assets/R (2).jpeg'

const AnotherPart = () => {
    return (
        <div className="mt-8">
            <div className="card text-white  p-4 md:flex block h-full card-side bg-red-400 shadow-xl">
                <div className="w-full md:w-1/2 rounded-xl  border-dashed border-2 border-indigo-600 ">
                    <div>
                        <figure>
                            <img className='p-4 rounded-xl' src={quotes} alt="" />
                        </figure>
                    </div>
                </div>

                <div className="card-body  my-auto w-full md:w-1/2">
                    <h2 className="title">Client's Loves</h2>
                    <hr className="long-line" />
                    <hr className="short-line" />
                    <img className="w-[50px] h-50px]" src={quote} alt="" />
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">

                            <h2 className="font-semibold text-xl md:text-3xl italic ">"I am extremely pleased with my experience on the summer camp website! The variety of summer camps available is impressive, and the website's user-friendly interface made it easy for me to navigate and find the perfect  for my child. The ordering process was seamless, and the delivery was prompt. My child loves the summer camp."</h2>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <h2 className="font-semibold text-xl md:text-3xl italic ">"I recently purchased a summer camp from this website, and I must say that I am thoroughly satisfied. The product quality exceeded my expectations, and the attention to detail in the design is fantastic. The website provided comprehensive product descriptions and clear images, allowing me to make an informed decision.I highly recommend this summer camp website to any parent looking for high-quality"</h2>  </div>
                        <div id="item3" className="carousel-item w-full">
                            <h2 className="font-semibold text-xl md:text-3xl italic ">I had a wonderful shopping experience on this summer camp website. The website's layout is visually appealing and easy to navigate, making it a breeze to browse through the extensive summer camp collection. The filters and search functionality helped me quickly find the specific  I was looking for. The checkout process was simple and secure, and I appreciated the various payment options available. </h2>  </div>

                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherPart;