import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='text-slate-400 font-bold'>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/mma-two-professional-fighters-punching-boxing-isolated-blue-wall-neon_155003-15575.jpg?w=900&t=st=1686740817~exp=1686741417~hmac=d3d9a47f26417907a09a3e549bf66ed035a6dd4c2a62e5b3d25bd3e01dd11582)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-2xl">The Complete <span className='text-orange-400'>Martial Art </span><br /> Online Training <br /> Platform</p>
                        <button className="btn btn-primary">Enroll Class</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/mma-two-professional-fighters-punching-boxing-isolated-blue-wall-neon_155003-15575.jpg?w=900&t=st=1686740817~exp=1686741417~hmac=d3d9a47f26417907a09a3e549bf66ed035a6dd4c2a62e5b3d25bd3e01dd11582)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-2xl">The Complete <span className='text-orange-400'>Martial Art </span><br /> Online Training <br /> Platform</p>
                        <button className="btn btn-primary">Enroll Class</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/mma-two-professional-fighters-punching-boxing-isolated-blue-wall-neon_155003-15575.jpg?w=900&t=st=1686740817~exp=1686741417~hmac=d3d9a47f26417907a09a3e549bf66ed035a6dd4c2a62e5b3d25bd3e01dd11582)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-2xl">The Complete <span className='text-orange-400'>Martial Art </span><br /> Online Training <br /> Platform</p>
                        <button className="btn btn-primary">Enroll Class</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;