import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AwesomeButton } from 'react-awesome-button';
import Profile from '../assets/droov.jpeg';

const Home = () => {
  return (
    <div name='Home' className="w-full h-screen bg-blue-950">
      <div className="flex w-full h-full">
        <div className="max-w-[1000px] px-7 mx-auto flex flex-col justify-center h-full">
          <div className="text-blue-200">
            <p>Hi my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold">Dhruv Naik</h1>
            <h2 className="text-4xl sm:text-6xl shadow-sm">I'm a Full Stack Developer</h2>
            <p className="py-4 max-w-sm">I love designing and building responsive web pages, currently
              focused on learning about backend technologies</p>
            <div>
              <Link to='work' smooth={true} duration={500} className="w-32 bg-transparent text-gray-200 group border border-white  hover:bg-blue-500 hover:border-blue-500 px-2 py-2 flex justify-center items-center ">
                My Work
                <span className="group-hover:rotate-90 duration-400">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="invisible lg:visible w-1/3 flex justify-center items-center">
          <img src={Profile} alt="profile-pic" className="rounded-full h-[410px] w-[390px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
