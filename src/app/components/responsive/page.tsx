import Link from "next/link";
import Image from "next/image";
export default function Responsive() {
    return (
      <div className="parentContainer">
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image src='/ass1.jpg' alt='about image' width={240} height={180} >

</Image>
          </div>
          <h1 className="title">HTML</h1>
          <p className="description">
          HTML, or Hypertext Markup Language, is a coding language that's used to structure and create content for web pages: 
          What it does{" "}
          </p>
          <a href="./components/responsive/blog1">
          <button className="readMore">Read More</button>
          </a>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image src='/ass2.jpg' alt='about image' width={240} height={180} >

</Image>
          </div>
          <h1 className="title">CSS</h1>
          <p className="description">
          CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and visual design of a webpage....{" "}
          </p>
          <a href="./components/responsive/blog2">
          <button className="readMore">Read More</button>
          </a>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"></div>
          <h1 className="title">JAVASCRIPT</h1>
          <p className="description">
          JavaScript is a high-level, dynamic programming language primarily used to create interactive and dynamic features on websites..... {" "}
          </p>
          <a href="./components/responsive/blog3">
          <button className="readMore">Read More</button>
          </a>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"></div>
          <h1 className="title">Blog Title</h1>
          <p className="description">
            tsufdjsa djlasbda sdkabsdlas doaubd asd sdlbja dajsld adal
            dkajdlasdladlaksdlahsdljadjakdaj{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"></div>
          <h1 className="title">Blog Title</h1>
          <p className="description">
            tsufdjsa djlasbda sdkabsdlas doaubd asd sdlbja dajsld adal
            dkajdlasdladlaksdlahsdljadjakdaj{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"></div>
          <h1 className="title">Blog Title</h1>
          <p className="description">
            tsufdjsa djlasbda sdkabsdlas doaubd asd sdlbja dajsld adal
            dkajdlasdladlaksdlahsdljadjakdaj{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
      </div>
    );
  }