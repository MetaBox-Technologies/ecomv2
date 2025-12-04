"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, Ref, useEffect } from "react";
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";


export default function Home() {
  return(
    <>
    <HeroSection/>
    <Service/>
    </>
  )
}