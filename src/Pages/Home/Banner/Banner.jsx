import BannerBG1 from "../../../assets/images/banner/1.jpg"
import BannerBG2 from "../../../assets/images/banner/2.jpg"
import BannerBG3 from "../../../assets/images/banner/3.jpg"
import BannerBG4 from "../../../assets/images/banner/4.jpg"
import BannerBG5 from "../../../assets/images/banner/5.jpg"
import BannerBG6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-96 md:h-[450px] lg:h-[550px] rounded-lg md:rounded-xl mt-8 md:mt-10 lg:mt-12">
            <div id="slide1" className="carousel-item relative w-full bg-black">
                <img
                    src={BannerBG1}
                    className="w-full  opacity-50" />
                <img src="" alt="" />
                <div className="h-full w-full absolute  
                space-y-5 md:space-y-7 flex flex-col justify-center left-10 md:left-16  lg:left-24">
                    <h2 className="max-w-[463px] w-2/3 text-white text-4xl md:text-5xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p className="max-w-[600px] text-white text-base md:text-lg w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="space-x-3 md:space-x-5">
                        <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Discover More</button>
                        <button className="btn btn-sm md:btn-md btn-outline bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5  bottom-2 md:bottom-5 flex gap-3 transform justify-end">
                    <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] text-white border-transparent">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white border-transparent">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-black">
                <img
                    src={BannerBG2}
                    className="w-full opacity-50" />
                <div className="h-full w-full absolute  
                space-y-5 md:space-y-7 flex flex-col justify-center left-10 md:left-16  lg:left-24">
                    <h2 className="max-w-[463px] w-2/3 text-white text-4xl md:text-5xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p className="max-w-[600px] text-white text-base md:text-lg w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="space-x-3 md:space-x-5">
                        <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Discover More</button>
                        <button className="btn btn-sm md:btn-md btn-outline bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-end">
                    <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] text-white border-transparent">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white border-transparent">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-black">
                <img
                    src={BannerBG3}
                    className="w-full opacity-50" />
                <div className="h-full w-full absolute  
                space-y-5 md:space-y-7 flex flex-col justify-center left-10 md:left-16  lg:left-24">
                    <h2 className="max-w-[463px] w-2/3 text-white text-4xl md:text-5xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p className="max-w-[600px] text-white text-base md:text-lg w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="space-x-3 md:space-x-5">
                        <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Discover More</button>
                        <button className="btn btn-sm md:btn-md btn-outline bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-end">
                    <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] text-white border-transparent">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white border-transparent">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full bg-black">
                <img
                    src={BannerBG4}
                    className="w-full opacity-50" />
                <div className="h-full w-full absolute  
                space-y-5 md:space-y-7 flex flex-col justify-center left-10 md:left-16  lg:left-24">
                    <h2 className="max-w-[463px] w-2/3 text-white text-4xl md:text-5xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p className="max-w-[600px] text-white text-base md:text-lg w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="space-x-3 md:space-x-5">
                        <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Discover More</button>
                        <button className="btn btn-sm md:btn-md btn-outline bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-end">
                    <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] text-white border-transparent">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811] text-white border-transparent">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full bg-black">
                <img
                    src={BannerBG5}
                    className="w-full opacity-50" />
                <div className="h-full w-full absolute  
                space-y-5 md:space-y-7 flex flex-col justify-center left-10 md:left-16  lg:left-24">
                    <h2 className="max-w-[463px] w-2/3 text-white text-4xl md:text-5xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p className="max-w-[600px] text-white text-base md:text-lg w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="space-x-3 md:space-x-5">
                        <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Discover More</button>
                        <button className="btn btn-sm md:btn-md btn-outline bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-end">
                    <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] text-white border-transparent">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#FF3811] text-white border-transparent">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full bg-black">
                <img
                    src={BannerBG6}
                    className="w-full opacity-50" />
                <div className="h-full w-full absolute  
                space-y-5 md:space-y-7 flex flex-col justify-center left-10 md:left-16  lg:left-24">
                    <h2 className="max-w-[463px] w-2/3 text-white text-4xl md:text-5xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p className="max-w-[600px] text-white text-base md:text-lg w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="space-x-3 md:space-x-5">
                        <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Discover More</button>
                        <button className="btn btn-sm md:btn-md btn-outline bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-end">
                    <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] text-white border-transparent">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white border-transparent">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;