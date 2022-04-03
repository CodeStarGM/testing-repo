import Head from "next/head";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Block1 from "../blocks/Block1";
import Block2 from "../blocks/Block2";
import Block3 from "../blocks/Block3";
import Block4 from "../blocks/Block4";
import Block5 from "../blocks/Block5";
import Block6 from "../blocks/Block6";
import Block7 from "../blocks/Block7";
import Block8 from "../blocks/Block8";
import Block9 from "../blocks/Block9";
import Block10 from "../blocks/Block10";
import Block11 from "../blocks/Block11";
import Block12 from "../blocks/Block12";
import Block13 from "../blocks/Block13";
import Block14 from "../blocks/Block14";
import Navbar from "../components/Navbar";
import Block3plus from "../blocks/Block3plus";
import Block4_1 from "../blocks/Block4_1";
import Block4_2 from "../blocks/Block4_2";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedBackgroundMobile from "../components/AnimatedBackgroundMobile";

export default function Home() {
  const [navbar, setNavbar] = useState();
  const [btn, setBtn] = useState();

  // active links
  const [navbarRef, navbarView] = useInView();
  const [navbarRef2, navbarView2] = useInView();

  const [animBgScreen, setAnimBgScreen] = useState("");

  const [timeline, setTimeline] = useState(gsap.timeline({ paused: false }));
  const [timeline2, setTimeline2] = useState(gsap.timeline({ paused: false }));
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(true)

  const onLeave = (origin, destination, direction) => {
    if (window.innerWidth > 1024) {
        let destinationAnim = gsap.utils.toArray(
            destination.item.getElementsByClassName("anim")
        );
        console.log(destinationAnim)
         if (destinationAnim.length) {
            timeline.fromTo(
                destinationAnim,
                {opacity: 0,x: -150},
                {
                    delay: 1,
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: 0.3,
                }
            ); //анимация при появлении
        }
        let originAnim = gsap.utils.toArray(
            origin.item.getElementsByClassName("anim")
        );
        if (originAnim.length) {
            timeline2.to(originAnim, {
                opacity: 0,
                x: -50,
                duration: 0.1,
                ease: "power4.inOut",
                stagger: 0.1,
            }); //анимация при исчезновении
        }

        for (let i = 0; i < 9; i++) {
            if (direction === "down" && destination.index === i + 1)
                setAnimBgScreen("down" + (i + 1));
            if (direction === "up" && destination.index === i)
                setAnimBgScreen("up" + (i + 1));
        }
    }
  };

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [handleResize]);

    useEffect(() => {
        console.log(width)
        if (window.innerWidth < 1024) {
            fullpage_api.setResponsive(true);
            console.log("----------setIsMobile(true)")
            setIsMobile(true)
        } else {
            fullpage_api.setResponsive(false);
            setIsMobile(false)
            console.log("  setIsMobile(false)")
        }
    }, [width])

    useEffect(()=>{
        if (window.innerWidth < 1024) {
            gsap.utils.toArray(".anim").forEach((element) => {
                ScrollTrigger.create({
                    trigger: element,
                    start: "top bottom-=110px",
                    //markers: true,
                    end: "bottom 110px",
                    onEnter: () => element.classList.add("activeMobScroll"),
                    onEnterBack: () => element.classList.add("activeMobScroll"),
                    onLeave: () => element.classList.remove("activeMobScroll"),
                    onLeaveBack: () => element.classList.remove("activeMobScroll"),
                });
            });
        }
    },[width])



  useEffect(() => {

    if (navbarView) {
      setNavbar("bg-[#26003b] border-2 border-[#973fa6]");
      setBtn("border-[#973fa6]");
    }
    if (navbarView2) {
      setNavbar("bg-[#26003b] border-2 border-[#973fa6]");
      setBtn("border-[#973fa6]");
    }

    if (!navbarView && !navbarView2) {
      setNavbar("neemble2");
      setBtn("border-[#00A4EF]");
    }

  }, [
    navbarView,
    navbarView2,
  ]);

  return (
    <>
      <Head>
        <title>Neemble</title>
        <meta
          name="description"
          content="Neemble The Ultimate blockchain watch to earn & stream to earn platform"
        />
      </Head>

      <Navbar
        btn={btn}
        navSettings={navbar}
      />
         {isMobile
             ? <AnimatedBackgroundMobile/>
             : <AnimatedBackground animBgScreen={animBgScreen}/>
        }
      <ReactFullpage
        //navigation
        menu={'#menu'}
        licenseKey={'A4CA5DAC-AE684D56-BF68A5C5-C7FB0D76'}
        onLeave={onLeave}
        scrollingSpeed={1000}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="neemble">
              <Block1 />
            </div>
            <div className="section">
              <Block2 />
            </div>
            <div className="section">
              <Block3plus />
            </div>
            <div className="section" data-anchor="streamer">
              <Block3 />
            </div>
            <div className="section">
              <Block4 />
            </div>
            <div className="section">
              <Block4_1 />
            </div>
            <div className="section">
              <Block4_2 />
            </div>
            <div className="section">
              <Block5 />
            </div>
            <div className="section">
              <Block7 />
            </div>
            <div className="section">
              <Block6 />
            </div>
            <div className="section">
              <Block8 />
            </div>

            <div className="section"  data-anchor="tokenomics">
              <Block9  />
            </div>
            <div className="section">
              <Block10 />
            </div>
            <div className="section">
              <Block11 />
            </div>

            <div className="section" data-anchor="roadmap">
              <Block12 navbarRef={navbarRef} />
            </div>
            <div className="section"  data-anchor="team">
              <Block13 navbarRef={navbarRef2} />
            </div>
            <div className="section">
                {!isMobile && <Block14/>}
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
