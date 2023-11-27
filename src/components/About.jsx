import { useState } from 'react';
import Typewriter from 'typewriter-effect';

let intro = "Hi. I'm Dhruv Naik, a Computer Engineering student.";

const About = () => {
    return ( 
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(intro)
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .start();
                }}
              />
            </div>
            <div>
              <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem, provident excepturi recusandae, inventore nihil consequatur totam dolores odio incidunt doloribus repellat minus voluptates! Laborum, vel! Molestiae quam repudiandae doloribus.</p>  
            </div>
          </div>
      </div>
    </div>
     );
}
 
export default About;