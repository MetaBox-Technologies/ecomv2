import './footer.css';
import Image from "next/image";

export function Footer(){
    const links = [
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Shop",
            href:"/shop"
        },
        {
            name:"Product",
            href:"/product"
        },
        {
            name:"Contact Us",
            href:"/contactus"
        },
    ];
     return (
            <footer className="">
              <div className="section_one">
                <div className='container'>
                    <Image className="logo" src="/images/file.svg" alt="" width={90} height={18}/>
                    <div id="line"></div>
                    <p>Gift & Decoration Store</p>
                </div>

                <div className="links_container_1">
                    {links.map((link, index)=><a key={index} href={link.href}>{link.name}</a>)}
                </div>
              </div>

              <div className="section_two">
                <div className="copyright">
                    <p>Copyright © 2024 VisioCreate. All rights reserved</p>
                    <a>Privacy Policy</a>
                    <a>Terms of Use</a>
                </div>
                <div className="icons">
                <Image className="logo" src="/images/instagram.svg" alt="" width={25} height={18}/>
                <Image className="logo" src="/images/facebook.svg" alt="" width={25} height={18}/>
                <Image className="logo" src="/images/youtube.svg" alt="" width={25} height={18}/>
                </div>
              </div>
            </footer>
        );
    }