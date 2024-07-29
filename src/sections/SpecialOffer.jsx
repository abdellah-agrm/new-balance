import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Elements/Motion";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </motion.div>

      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <motion.div variants={fadeIn('left', 'tween', 0.5, 1)}>
            <Button label='Shop now' iconURL={arrowRight} />
          </motion.div>

          <motion.div variants={fadeIn('left', 'tween', 0.8, 1)}>
            <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpecialOffer;
