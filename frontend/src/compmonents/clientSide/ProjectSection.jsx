import React from "react";

export default function ProjectSection() {
  return (
    <div>
      {/* <div className='w-full h-[140vh]'>
        <div className='w-full h-[60vh] bg-indigo-950 px-14'>
            <div className='text-center pt-8 md:w-[70%] m-auto'>
                <p className='text-white text-2xl md:text-5xl font-serif font-bold mb-5'>Our <span className='text-orange-500'>Projects</span></p>
                <p className='text-white md:text-xl'>S Infra City Developers is provide many type of real estate services. It's also aims that every man may achieve his dream through his investment.</p>
            </div>
            <div className='w-full h-auto  mt-6 md:flex md:gap-6 md:mt-20 bg-white'>
                <div className='mb-8 bg-white'>
                    <img className='w-full h-[330px]'  src="https://www.smindia.org/images/group/1.jpg" alt="" />
                    <div className='border border-t-0 p-2'>
                        <h1 className='text-xl font-bold font-serif'>Plot Development</h1>
                        <p>S Infra City Developers, an integrated township of lush greens and wide open vistas, is a blend of residential, retail and hospitality projects.</p>
                        <p className='px-5 py-2 rounded-full border border-orange-500 inline-block mt-3 cursor-pointer hover:bg-orange-500 text-xl font-bold mb-5'>Read More</p>
                    </div>
                </div>
                <div className='mb-8  bg-white'>
                    <img className='w-full h-[330px]'  src="https://www.smindia.org/images/group/2.jpg" alt="" />
                    <div className='border border-t-0 p-2'>
                    <h1 className='text-xl font-bold font-serif'>Row Houses</h1>
                    <p>The initial offering at S Infra City Developers is its spacious Row Houses. we are offer many sizes of row houses with all star amenities.</p>
                    <p className='px-5 py-2 rounded-full border border-orange-500 inline-block mt-3 cursor-pointer hover:bg-orange-500 text-xl font-bold mb-5'>Read More</p>
                </div>
                </div>
                
                <div className='mb-8  bg-white'>
                    <img className='w-full h-[330px]'  src="https://www.smindia.org/images/group/3.jpg" alt="" />
                    <div className='border border-t-0 p-2'>
                        <h1 className='text-xl font-bold font-serif'>Villa & Form House</h1>
                        <p>S Infra City Developers offers luxury villa and form houses. Delightful Luxuries Facility provides relaxation for the whole family.</p>
                        <p className='px-5 py-2 rounded-full border border-orange-500 inline-block mt-3 cursor-pointer hover:bg-orange-500 text-xl font-bold mb-5'>Read More</p>
                    </div>
                </div>

            </div>
        </div>
      </div>    */}

      <div className="w-full h-auto bg-white pb-14">
        <div className="w-full h-64 bg-blue-950 ">
          <div className="text-center pt-8 md:w-[70%] m-auto px-11">
            <p className="text-white text-2xl md:text-5xl font-serif font-bold mb-5">
              Our <span className="text-orange-500">Projects</span>
            </p>
            <p className="text-white md:text-xl">
              S Infra City Developers is provide many type of real estate
              services. It's also aims that every man may achieve his dream
              through his investment.
            </p>
            
          </div>
        </div>
        <div className="w-full h-auto -mt-10">
          <div className=" w-[90%] md:flex gap-9 m-auto">
            <div className="w-[80%] m-auto  md:w-1/3 mb-8">
              <div className="w-full h-[350px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://www.smindia.org/images/group/1.jpg"
                  alt=""
                />
              </div>
              <div className="px-3 text-justify border border-t-0 mt-5">
                <h1 className="text-xl font-bold font-serif ">
                  Plot Development
                </h1>
                <p>
                  S Infra City Developers, an integrated township of lush greens
                  and wide open vistas, is a blend of residential, retail and
                  hospitality projects.
                </p>
                <p className='px-5 py-2 rounded-full border border-orange-500 inline-block mt-3 cursor-pointer hover:bg-orange-500 text-xl font-bold mb-5'>Read More</p>
              </div>
            </div>
            <div className="w-[80%] m-auto  md:w-1/3 mb-8">
              <div className="w-full h-[350px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://www.smindia.org/images/group/2.jpg"
                  alt=""
                />
              </div>
              <div className="px-3 text-justify border border-t-0 mt-5">
                <h1 className="text-xl font-bold font-serif ">
                  Plot Development
                </h1>
                <p>
                  S Infra City Developers, an integrated township of lush greens
                  and wide open vistas, is a blend of residential, retail and
                  hospitality projects.
                </p>
                <p className='px-5 py-2 rounded-full border border-orange-500 inline-block mt-3 cursor-pointer hover:bg-orange-500 text-xl font-bold mb-5'>Read More</p>
              </div>
            </div> <div className="w-[80%] m-auto  md:w-1/3 mb-8">
              <div className="w-full h-[350px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://www.smindia.org/images/group/3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3 text-justify border border-t-0 mt-5">
                <h1 className="text-xl font-bold font-serif ">
                  Plot Development
                </h1>
                <p>
                  S Infra City Developers, an integrated township of lush greens
                  and wide open vistas, is a blend of residential, retail and
                  hospitality projects.
                </p>
                <p className='px-5 py-2 rounded-full border border-orange-500 inline-block mt-3 cursor-pointer hover:bg-orange-500 text-xl font-bold mb-5'>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
