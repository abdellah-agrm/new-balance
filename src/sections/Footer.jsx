import {motion} from "framer-motion";
import { fadeIn, footerVariants, textVariant } from "../Elements/Motion";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <motion.img variants={textVariant(0.6)} src={footerLogo} alt='logo' className='m-0 w-auto h-10' />
          </a>
          <motion.p variants={textVariant(0.8)} className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest New balance store. Find
            Your perfect Size In Store. Get Rewards
          </motion.p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon, index) => (
              <motion.div variants={fadeIn('up', 'spring', index * 0.6, 0.75)} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}>
                    <ScrollLink to="products" className="cursor-pointer" spy={true} smooth={true} duration={500}>
                    {link.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
