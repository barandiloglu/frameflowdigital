import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import logo from './assets/logo2.png';

const Navbar = () => {
    const textControls = useAnimation();
    const logoControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await textControls.start({
                scale: [1, 1.2, 1],
                opacity: 1,
                transition: { duration: 0.6, ease: 'easeInOut' }
            });
            await textControls.start({
                x: 55, // Move to the right by 55px
                transition: { duration: 0.6, ease: 'easeInOut' }
            });
            logoControls.start({
                opacity: [0, 1],
                transition: { duration: 0.6, ease: 'easeInOut' }
            });
        };
        sequence();
    }, [textControls, logoControls]);

    return (
        <nav className="p-5 bg-light text-secondary font-alata">
            <div className="container flex items-center justify-between mx-auto h-[5vh] ">
                <div className="flex items-center">
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={textControls}
                        className="fixed text-2xl font-bold"
                        style={{ left: '1.5rem' }} // Adjust the position as needed
                    >
                        Frame Flow
                    </motion.div>
                    <motion.img
                        src={logo}
                        alt="Logo"
                        initial={{ opacity: 0 }}
                        animate={logoControls}
                        className="fixed h-8 mt-2 ml-4 left-1 w-14" // Adjust the size and position as needed
                        style={{ top: '1rem' }} // Adjust the position as needed
                    />
                </div>
                <ul className="flex items-center space-x-8">
                    {['Projects', 'Services', 'Why Us?'].map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className=""
                            >
                                {item}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a
                            href="#contact-us"
                            className="px-4 py-2 bg-primary text-light"
                            role="button"
                        >
                            Contact Us
                        </a>
                    </motion.li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
