import { motion } from "framer-motion";
import { navVariants } from "../Elements/Motion";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <motion.nav variants={navVariants} initial="hidden" whileInView="show"
        className="flex justify-between items-center max-container" >
        <a href='/'>
          <img src={headerLogo} alt='logo'
            className='m-0 w-auto h-10' />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <ScrollLink to={item.href} className='font-montserrat cursor-pointer leading-normal text-lg text-slate-gray' spy={true} smooth={true} duration={500}>
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Nav;
