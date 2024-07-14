import PropTypes from "prop-types";
import { IoArrowForward } from "react-icons/io5";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-6 pt-6 h-52">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-base md:text-lg lg:text-xl text-[#FF3811] font-semibold">Price : ${price}</p>
                    <button className="btn btn-ghost text-[#FF3811] text-lg md:text-xl lg:text-2xl"><IoArrowForward /></button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;