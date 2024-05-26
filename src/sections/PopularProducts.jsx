import { motion } from "framer-motion";
import { products } from "../constants";
import { PopularProductCard } from "../components";
import { fadeIn } from "../Elements/Motion";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>

        <motion.h3 variants={fadeIn('right', 'tween', 0.2, 1)} className='text-4xl leading-[68px] font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span>Products
        </motion.h3>

        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </motion.p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product, index) => (
          <PopularProductCard key={product.name} index={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
