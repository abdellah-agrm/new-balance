import { motion } from "framer-motion";
import { ReviewCard } from "../components";
import { reviews } from "../constants";
import { staggerContainer, textVariant } from "../Elements/Motion";

const CustomerReviews = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className='max-container'>
      <motion.h3 variants={textVariant(0.4)} className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </motion.h3>
      <motion.p variants={textVariant(0.8)} className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </motion.p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            index={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CustomerReviews;
