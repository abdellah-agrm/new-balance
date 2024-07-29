import {motion} from "framer-motion";
import { fadeIn, staggerContainer } from "../Elements/Motion";
import { sectionImg } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </motion.div>

      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='flex-1 flex justify-center items-center'>
        <img
          src={sectionImg}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </motion.div>
    </motion.div>
  );
};

export default SuperQuality;
