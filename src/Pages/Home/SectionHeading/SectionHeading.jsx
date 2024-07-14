import PropTypes from 'prop-types';

const SectionHeading = ({name, heading, description}) => {
    return (
        <div className="w-full p-4">
            <h3 className="text-[#FF3811] text-center text-base md:text-lg lg:text-xl font-bold mb-5">{name}</h3>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] mb-5">{heading}</h1>
            <p className="text-center mb-5 text-sm md:text-base w-11/12 md:w-9/12 lg:w-7/12 mx-auto">{description}</p>
        </div>
    );
};

SectionHeading.propTypes = {
    name: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
}

export default SectionHeading;