import Responsive from "./components/responsive//page";
import Responsive2 from "./components/responsive-2/page";
import Keyframe from "./components/responsiveness/page";
import Image from "next/image";



export default function Home() {
  return (
    
    <section className="p-4">
      <div className="container">
         <div className=" bg-gray-100 text-center p-8">
        <h1 className="text-4xl font-bold">Porfolio</h1>
          <div className='flex flex-wrap'>
          <Image src='/image1.jpg' alt='about image' width={200} height={200} >

          </Image>
          <p className="text-lg mt-4 ml-5">
          I'm a web developer with a passion for creating clean, user-friendly websites.<br/> I have experience in
          HTML, CSS, JavaScript, React, and of course, Next.js!</p>
        
        </div>
    
</div>
        <Responsive/>
        {/* <Responsive2/> */}
        <Keyframe/>
      </div>
  
    </section>

  
  );
}