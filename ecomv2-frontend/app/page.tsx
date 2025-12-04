"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, Ref, useEffect } from "react";
import { Service } from "./_componnents/services/services";
import MySwiper from "./_componnents/HeroSection/customs/swipper";


export default function Home() {
  return(
    <>
    <MySwiper/>
    <Service/>
    </>
  )
}