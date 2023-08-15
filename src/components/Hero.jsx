import { heroimg } from "../assets/images";

const Hero = () => {
  return (
    <section className="px-[7%] md:py-[2rem] py-[3rem] flex lg:flex-row flex-col  w-full md:h-screen h-0   gap-8 justify-between items-center ">
      <div className="  max-w-[500px]">
        <p className="pb-1 w-fit text-red-700 font-semibold border-b-[1px] border-red-700 ">
          Hosting
        </p>
        <h1 className="sm:text-[4rem] text-[2.5rem] font-bold pt-6 ">
          Premium Web <br /> Hosting for Your Website
        </h1>
        <p className="sm:text-xl text-md text-gray-600">
          Blazing fast Web hosting for individuals and business of all sizes
          backed by <span className="spacing-5">24x7x365 support.</span>
        </p>
        <div className="py-8">
          <button className="sm:px-4 px-2 sm:py-3 py-2  bg-red-700 text-white rounded-lg border-[1px] border-red-700">
            Create an account
          </button>
          <button className="sm:px-4 px-2 sm:py-3 py-2  ml-4 bg-white text-black border-[1px] border-black rounded-lg ">
            Choose your plan
          </button>
        </div>
      </div>
      <div>
        <img src={heroimg} alt="" />
      </div>
    </section>
  );
};
export default Hero;
