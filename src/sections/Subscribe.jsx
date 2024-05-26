import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Elements/Motion";
import { Button } from "../components";

const Subscribe = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} id='contact-us' className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <motion.h3 variants={fadeIn('right', 'tween', 0.2, 1)} className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </motion.h3>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@newbalance.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Subscribe;
