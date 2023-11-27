import HTML from '../assets/html.png'
import Tailwind from '../assets/tailwind.png'
import Reactpic from '../assets/react.png'
import GitHub from '../assets/github.png'
import php from '../assets/php-med-trans.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
const MySkills = () => {
    return ( 
        <div name='skills' className='bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-500 '>Skills</p>
              <p className='mt-3'>Built projects with these technologies</p>
          </div>
            <div className='pb-4 mt-7 w-full grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-10 text-center justify-between'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={HTML} alt="html" className='w-32 mx-auto'/>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={Tailwind} alt="html" className='w-32 mx-auto'/>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={javascript} alt="html" className='w-32 mx-auto'/>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={Reactpic} alt="react-img" className='w-32 mx-auto'/>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={GitHub} alt="github" className='w-32 mx-auto'/>
                </div>
                <div className='flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={php} alt="php" className='w-32 mx-auto'/>
                </div>
                <div className='flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img src={node} alt="nodejs" className='w-32 mx-auto'/>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default MySkills;