 
"use client"
import './header.css';
import Image from "next/image";
import {useContext} from 'react';
import { RootContext } from "../../_providers/RootContext"


export function Header(){

    const { isCartOpen } = useContext(RootContext);
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
        <header className="w-screen p-4">
          <div className="test">
            <Image src="/images/ticket-percent.svg" alt="" width={20} height={18} objectFit="contain" style={{flexGrow: 0, flexShrink: 1}}/>
            <p>30% off storewide — Limited time!</p>
            <a href="/shop" id='shopnow'>Shop Now <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <nav className="flex gap-4 text-black bg-[white]">
          <i className="fa-solid fa-bars" id="menu_icon"></i>
          {/*<p id="logo">VisioCreate</p>*/}
          <Image className="logo" src="/images/file.svg" alt="" width={90} height={18}/>
          <div id="links_container">
            {links.map((link, index)=><a key={index} href={link.href}>{link.name}</a>)}
          </div>
          <div id="icon_container">
          <a href=""><Image className="icon1" src="/images/search 02.svg" alt="" width={25} height={18}/></a>
          <div onClick={()=>{
            isCartOpen(true)
          }}><Image className="icon3" src="/images/shopping bag.svg" alt="" width={25} height={18}/></div>
          </div>
          </nav>
        </header>
    );
}