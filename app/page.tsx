
import About from "@/components/About";
import Hero from "@/components/Hero";
import { TracingBeam } from "@/components/ui/TracingBeam";



export default function Home() {
  return (
    <>
    
        <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <TracingBeam className=''>
            <div className="max-w-screen-2xl  w-full">
            <Hero/> 
            </div>
            <div className=" relative max-w-screen-xl w-full ">
            <About />
            </div>

          </TracingBeam>
        </main>
      </>
  );
}
