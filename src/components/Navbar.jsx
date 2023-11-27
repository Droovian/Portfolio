import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (navbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [navbar]);

    const handleclick = () => {
        setNavbar(!navbar);
    }

    const contactHit = () => {
        navigate('/contact');
        setNavbar(false);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
        setNavbar(false);
    }
    return ( 
        <>
        <div className='px-3 fixed w-full h-14 flex justify-between items-center bg-[#0a192f] text-blue-200'>
            <div>
            
            </div>
            <div className='hidden md:flex'>
                <ul className='flex space-x-7 hover:cursor-pointer'>
                    <li>
                    <ScrollLink to='Home' smooth={true} duration={500}>Home</ScrollLink>
                    </li>
                    <li>
                    <ScrollLink to='about' smooth={true} duration={500}>About</ScrollLink>
                    </li>
                    <li>
                    <ScrollLink to='work' smooth={true} duration={500}>Work</ScrollLink>
                    </li>
                    <button onClick={contactHit}>Contact</button>
                </ul>
            </div>
                
                <div onClick={handleclick} className='md:hidden z-20'>
                    { !navbar ? <FaBars size={20}/> : <FaTimes/>}
                </div>

                <div className={!navbar ?  'hidden' :  'fixed top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center text-blue-200'}>
                    <ScrollLink to='Home' className='hover:cursor-pointer py-6 text-3xl' onClick={scrollToTop}>Home</ScrollLink>
                    <ScrollLink to='about' className='hover:cursor-pointer py-6 text-3xl' onClick={handleclick}>About</ScrollLink>
                    <ScrollLink to='work' className='hover:cursor-pointer py-6 text-3xl' onClick={handleclick}>Work</ScrollLink>
                    <button onClick={contactHit} className='py-6 text-3xl'>Contact</button>
                </div>

                <footer className='hidden lg:flex fixed flex-col pl-1 top-[35%] left-0'>
                    <ul>
                        <li className='flex-col space-x-20'>
                            <a href="https://github.com/Droovian" target="_blank">
                            <FaGithub size={25}/>
                            </a>
                            <a href="https://twitter.com/dhruvnaique" target="_blank">
                                <FaTwitter size={25}/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCUQt_XXQpFhvXy8eLLOGX9w" target="_blank">
                                <FaYoutube size={25}/>
                            </a>
                        </li>
                    </ul>
                </footer>

        </div>
        </>
     )
}
 
export default Navbar;