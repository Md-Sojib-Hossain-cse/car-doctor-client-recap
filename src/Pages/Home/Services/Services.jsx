import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("services.json")
            .then(res => setServices(res.data))
    }, [])

    return (
        <div className="mt-8 md:mt-10 lg:mt-12">
            <SectionHeading
                name="Services"
                heading="Our Service Area"
                description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            ></SectionHeading>
            <div className="mt-4 lg:mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-6 md:mt-8 lg:mt-10">
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;