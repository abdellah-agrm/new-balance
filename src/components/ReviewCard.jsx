import { motion } from "framer-motion";
import { star } from "../assets/icons";
import { textVariant } from "../Elements/Motion";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <motion.img variants={textVariant(0.3)} src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
      <motion.p variants={textVariant(0.6)} className='mt-6 max-w-sm text-center info-text'>{feedback}</motion.p>
      <motion.div variants={textVariant(0.8)} className='mt-3 flex justify-center items-center gap-2.5'>
        <img src={star} width={24} height={24} alt='rating star' className='object-contain m-0'/>
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </motion.div>
      <motion.h3 variants={textVariant(1)} className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </motion.h3>
    </div>
  );
};

export default ReviewCard;
