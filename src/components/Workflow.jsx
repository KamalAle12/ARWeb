import { useEffect } from 'react';
import video6 from "../assets/video6.mp4"; 
import video7 from "../assets/video7.mp4";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const Workflow = () => {

  useEffect(() => {
    AOS.init(); 
  }, []);
    
  return (
    <div id="journey" className="mt-20">
        <h2 
          className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-extrabold text-white" 
          data-aos="zoom-in-up" 
          data-aos-easing="ease-out-cubic" 
          data-aos-duration="1000"
        >
            Begin crafting  
            {" "}<span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your AR masterpiece now</span>
        </h2>
        <div className="flex flex-wrap justify-center mt-10" >
            <div className="p-4 w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md border-none rounded-lg shadow-lg overflow-hidden" data-aos="fade-down-left" 
                data-aos-easing="ease-out-cubic" 
                data-aos-duration="1000">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      src={video6} 
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg border-dashed border-2 border-yellow-500"></div>
                </div>
            </div>
            <div 
              className="pt-12 w-full lg:w-1/2" 
              data-aos="fade-up" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="1000"
            >
                <p className="px-6 lg:px-12 text-center text-lg lg:text-xl font-serif text-white">
                    Immerse yourself in a realm where creativity has no limits! Experience a stunning collection of mythical creatures—majestic unicorns, playful dragons, and more—brought to life through Augmented Reality. Whether you're an AR pro or just curious, let these enchanting beings spark your imagination and inspire your own AR creations. Dive in and start crafting your AR masterpieces today!
                </p>
            </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
            <div 
              className="pt-12 w-full lg:w-1/2" 
              data-aos="fade-up" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="1000"
            >
                <p className="px-6 lg:px-12 text-center text-lg lg:text-xl font-serif text-white">
                Discover a new dimension of imagination with our Augmented Reality world! Step into vibrant scenes 
                where fantastical creatures like majestic unicorns and playful dragons come to life. 
                Each scene is meticulously crafted to captivate and inspire, blending magic with interactive experiences. 
                Dive in and let these enchanting environments fuel your creativity and elevate your AR projects to new heights.
                </p>
            </div>
            <div className="p-4 w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md border-none rounded-lg shadow-lg overflow-hidden" data-aos="fade-down-right" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="1000">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      src={video7} 
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg border-dashed border-2 border-yellow-500"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Workflow;
