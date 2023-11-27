import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="bg-blue-950 w-full h-32 flex items-center">
            <div className="p-3 flex justify-between w-full">
                <p className="text-blue-200 text-2xl font-sans mx-3">Made by Dhruv Naik</p>
            <li className='sm:invisible flex items-center space-x-5'>
                        <a href="https://github.com/Droovian" target="_blank">
                            <FaGithub size={20}/>
                        </a>
                        <a href="https://twitter.com/dhruvnaique" target="_blank">
                             <FaTwitter size={20}/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCUQt_XXQpFhvXy8eLLOGX9w" target="_blank">
                             <FaYoutube size={20}/>
                        </a>
            </li>
            </div>
        </div>
     );
}
 
export default Footer;