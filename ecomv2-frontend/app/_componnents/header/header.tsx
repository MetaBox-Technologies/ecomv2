 
"use client"
import './header.css';
import Image from "next/image";
import {useContext, useEffect, useState} from 'react';
import { RootContext } from "../../_providers/RootContext"
import ExpandingSearchBar from '../expanding/ExpandingSearchBar';
import { usePathname } from 'next/navigation';
import { cartloader } from '../Cart/cartContentLoader';

export function Header(){

    const path = usePathname();
    const [hasItems, setHasItems] = useState(false)
    const { isCartOpen } = useContext(RootContext);
    const isOnCartPage = path.startsWith("/cart") || path.startsWith("/checkout") || path.startsWith("/complete");
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
            name:"Contact Us",
            href:"/contact"
        },
    ];

    useEffect(()=>{
      setHasItems(cartloader().length > 0)
    })
    

    

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
            {links.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? path === "/"
                  : path.startsWith(link.href);

              return (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    color: isActive ? "black" : "rgb(123, 123, 123)"
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div id="icon_container">
          {/*<a href=""><Image className="icon1" src="/images/search 02.svg" alt="" width={25} height={18}/></a>*/}
          <ExpandingSearchBar/>
          {
           !isOnCartPage && <div onClick={()=>{
            isCartOpen(true)
            }} className='cart-icon'>
              {hasItems && <div className='item-icon'></div>}
              <Image className="icon3" src="/images/shopping bag.svg" alt="" width={25} height={18}/>
            </div> 
          }
          </div>
          </nav>
        </header>
        

    );
}