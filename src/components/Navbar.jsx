import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const navigate = useNavigate();
    const handleclick = () => {
        setNavbar(!navbar);
    }

    const contactHit = () => {
        navigate('/contact');
    }
    return ( 
        <>
        <div className='px-3 fixed w-full h-14 flex justify-between items-center bg-[#0a192f] text-blue-200'>
            <div>
            
            </div>
            <div className='hidden md:flex'>
                <ul className='flex space-x-7 hover:cursor-pointer'>
                    <li>
                    <Link to='Home' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                    <Link to='work' smooth={true} duration={500}>Work</Link>
                    </li>
                    <button onClick={contactHit}>Contact</button>
                </ul>
            </div>
                
                <div onClick={handleclick} className='md:hidden z-20'>
                    { !navbar ? <FaBars size={20}/> : <FaTimes/>}
                </div>

                <div className={!navbar ?  'hidden' :  'list-none absolute top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center text-blue-200 hover:cursor-pointer'}>
                    <li className='py-6 text-3xl'>Home</li>
                    <li className='py-6 text-3xl'>About</li>
                    <li className='py-6 text-3xl'>Work</li>
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