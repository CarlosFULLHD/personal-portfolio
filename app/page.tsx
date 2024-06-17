"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DetailedCard from "@/components/sections/phoneAdiction/components/DetailedCard";
import { Avatar, Button, Tooltip } from "@nextui-org/react";
import BonusCard from "@/components/sections/phoneAdiction/components/BonusCard";
import { AuthorsSection } from "@/components/sections/phoneAdiction/AuthorsSection";
import { ModulesSection } from "@/components/sections/phoneAdiction/ModulesSection";
import { FaqsSection } from "@/components/sections/phoneAdiction/FaqsSection";
import { BonusSection } from "@/components/sections/phoneAdiction/BonusSection";
import Image from "next/image";

import CountdownTimer from "@/components/sections/phoneAdiction/components/CountdownTimer";
import ModalOneMinute from "@/components/sections/phoneAdiction/components/ModalOneMinute";
import PopUp from "@/components/PopUp";
import WistiaVideo from "@/components/sections/phoneAdiction/components/WistiaVideo";
import SocialProof from "@/components/sections/phoneAdiction/components/SocialProof";
import { HeroSection } from "@/components/sections/phoneAdiction/HeroSection";
import FooterSection from "@/components/common/FooterSection";
export default function Home() {
  return (
    <section className="flex flex-col ">
      <HeroSection />

      <ModulesSection />

      <FooterSection />
    </section>
  );
}
