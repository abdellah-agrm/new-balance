import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service, index) => (
        <ServiceCard key={service.label} index={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
