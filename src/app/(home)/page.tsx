'use client';

import { HomeHeader } from "@/components/header/header";
import { useLocale } from "@/app/shared/locale-context";
import { useRef, useState } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import Slider from "react-slick";
import Image from '@/components/shared/image';
import slide1 from '@/assets/images/slideshow/slide-img-1.jpg';
import slide2 from '@/assets/images/slideshow/slide-img-2.jpg';
import slide3 from '@/assets/images/slideshow/slide-img-3.jpg';
import slide4 from '@/assets/images/slideshow/slide-img-4.jpg';
import slide5 from '@/assets/images/slideshow/slide-img-5.jpg';
import homepage1 from '@/assets/images/homepage-1.jpg';
import homepage2 from '@/assets/images/homepage-2.jpg';
import homepage3 from '@/assets/images/homepage-3.jpg';
import homepage4 from '@/assets/images/homepage-4.jpg';
import ActiveLink from "@/components/shared/links/active-link";
import Logo from "@/components/shared/logo";
import { useIsMounted } from "@/hooks/use-is-mounted";
import SocialLinks from "@/components/footer/social-links";
import { lilita_one, neonderthaw } from "@/app/fonts/fonts";
import cn from "@/utils/cn";


// Slideshow settings
const sliderSettings = {
  dots: false, 
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  arrows: false
};

function DesktopBanner({ slides }) {
  const { t } = useLocale();
  const sliderRef = useRef<Slider | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setActiveSlide(index); 
  };

  const handleAfterChange = (current: number) => {
    setActiveSlide(current);
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="">
      <div className="ss-overlay absolute right-0 top-0 w-1/4 h-full bg-[#ebebeb] -z-20 dark:bg-light-dark"></div>

      <div className="desktop-banner">
        <div className="ss-back-text absolute top-[22%] left-1/2 -translate-x-1/2 text-[220px] -z-19 overflow-hidden font-extrabold whitespace-nowrap text-[rgba(25,27,29,0.03)] dark:opacity-15 dark:text-[#374152] w-full h-auto">
          <div>{slides[activeSlide].text.catchPhrase}</div>
        </div>

        <div className="ss-wrap grid justify-between grid-cols-[0.2fr_1.2fr_1.1fr] py-8 pl-[80px] pr-[40px]">
          <div className="ss-numbers self-center grid gap-[10px]">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-10 h-10 rounded-full z-[22] cursor-pointer ${
                  activeSlide === index
                    ? 'bg-[var(--color-hint)] text-white'
                    : 'bg-[#ebebeb] text-black'
                } flex items-center justify-center`}
              >
                {'0' + (index + 1)}
              </div>
            ))}
          </div>
          <div className="ss-text z-[22] self-center">
            <div className="title inline-block mb-6 overflow-hidden leading-[35px] text-[25px] font-extrabold tracking-[-0.06em] text-[rgba(25,27,29,0.6)] dark:text-[var(--color-accent)]">
              {slides[activeSlide].text.title}
            </div>
            <div className="catch block mb-7 text-[100px] font-extrabold tracking-[-0.06em] leading-[120px]">{slides[activeSlide].text.catchPhrase}</div>
            <div className="w-[80%] text-[14px] leading-[28px] ml-[7px] mb-[40px] text-[rgba(25,27,29,0.7)] dark:text-[#f5f5f5]">
            {slides[activeSlide].text.decription}
            </div>
            <div className="action-btns flex gap-2 justify-center items-center dark:bg-[var(--color-hint)] bg-[#efefef] rounded-[2.3125rem] p-2 px-3 w-[250px]">
              <span><span className="font-bold">Get RYTU</span> <span className="opacity-80 hover:opacity-100 cursor-pointer">| {t('components:navbar.explore')}</span> </span>
              <button className="text-[20px] opacity-80 hover:opacity-100">
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="ss-images overflow-hidden">
            <div className="max-w-[500px] w-auto h-[560px] overflow-hidden relative flex justify-center">
              <div className="w-[1000px] h-[600px] bg-[#fad5de]">
                <Slider
                  {...sliderSettings}
                  ref={sliderRef}
                  afterChange={handleAfterChange} 
                >
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <Image
                        src={slide.image}
                        alt={`Slider Image ${index + 1}`}
                        width={1200}
                        height={600}
                        layout="responsive"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
                
            <div className="flex mt-8 ml-8">
              <button className="mr-[15px] text-[22px]" onClick={handlePrevious}>
                <PiArrowLeftThin />
              </button>
              <div className="text-sm self-center">{'0' + (activeSlide + 1)}/{'0' + slides.length}</div>
              <button className="ml-[15px] text-[22px]" onClick={handleNext}>
                <PiArrowRightThin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileBanner({ slides }) {
  const { t } = useLocale();
  const sliderRef = useRef<Slider | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setActiveSlide(index); 
  };

  const handleAfterChange = (current: number) => {
    setActiveSlide(current);
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="mobile-banner mt-[-100px]">
      <div className="ss-wrap relative">
        <div className="w-full h-[70vh] overflow-hidden relative flex justify-center z-[-19]">
          <div className="min-w-[1000px] h-[100vh] bg-[#ebebeb] dark:bg-[#fad5de]">
            <Slider
              {...sliderSettings}
              ref={sliderRef}
              afterChange={handleAfterChange} 
            >
              {slides.map((slide, index) => (
                <div key={index}>
                  <Image
                    src={slide.image}
                    alt={`Slider Image ${index + 1}`}
                    layout="responsive"
                    priority={index === 0}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="ss-text z-[20] self-center px-8 absolute bottom-[10vh]">
          <div className="title inline-block mb-2 overflow-hidden leading-[15px] text-[20px] font-extrabold tracking-[-0.06em] py-[4px] px-[8px] bg-[var(--color-accent-2)] text-[#000000a6] dark:lg:text-[var(--color-accent)]">
            {slides[activeSlide].text.title}
          </div>
          <div className="catch block mb-3 text-[40px] font-extrabold tracking-[-0.06em] leading-[60px] text-black dark:lg:text-white">{slides[activeSlide].text.catchPhrase}</div>
          <div className="action-btns flex gap-2 mb-6 justify-center items-center dark:bg-[var(--color-hint)] bg-[#efefef] rounded-[2.3125rem] p-2 px-3 w-[250px]">
            <span><span className="font-bold">Get RYTU</span> <span className="opacity-80 hover:opacity-100 cursor-pointer">| {t('components:navbar.explore')}</span> </span>
            <button className="text-[20px] opacity-80 hover:opacity-100">
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div className="flex mt-8 mr-8 justify-end">
          <button className="mr-[15px] text-[22px]" onClick={handlePrevious}>
            <PiArrowLeftThin />
          </button>
          <div className="text-sm self-center">{'0' + (activeSlide + 1)}/{'0' + slides.length}</div>
          <button className="ml-[15px] text-[22px]" onClick={handleNext}>
            <PiArrowRightThin />
          </button>
        </div>
      </div>
      
    </div>
  )
}

function BannerSection () {
  const { t } = useLocale();

  const slides = [
    { id: 1, image: slide1, text: { title: t('templates:home.slider.slide1.title'), catchPhrase: t('templates:home.slider.slide1.catchPhrase'), decription: t('templates:home.slider.slide1.decription')}},
    { id: 2, image: slide2, text: { title: t('templates:home.slider.slide2.title'), catchPhrase: t('templates:home.slider.slide2.catchPhrase'), decription: t('templates:home.slider.slide2.decription')} },
    { id: 3, image: slide3, text: { title: t('templates:home.slider.slide3.title'), catchPhrase: t('templates:home.slider.slide3.catchPhrase'), decription: t('templates:home.slider.slide3.decription')} },
    { id: 4, image: slide4, text: { title: t('templates:home.slider.slide4.title'), catchPhrase: t('templates:home.slider.slide4.catchPhrase'), decription: t('templates:home.slider.slide4.decription')} },
    { id: 5, image: slide5, text: { title: t('templates:home.slider.slide5.title'), catchPhrase: t('templates:home.slider.slide5.catchPhrase'), decription: t('templates:home.slider.slide5.decription')} },
  ];

  return (
      <div className="">
        <div className="ss-overlay absolute right-0 top-0 w-1/4 h-full bg-[#ebebeb] -z-20 dark:bg-light-dark"></div>

        <div className="hidden lg:block px-4 sm:px-6">
          <DesktopBanner 
            slides={slides} 
          />
        </div>

        <div className="block lg:hidden">
          <MobileBanner 
            slides={slides} 
          />
        </div>
      </div>
    )
}

function AboutSection() {
  const { t } = useLocale();
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div className="scroll-text"></div>
        <div className="mission text-center leading-[1.2] text-[2rem] md:text-[2.4rem] lg:text-[3.2rem] lg:w-[75%]">{t('templates:home.about.mission.title')}</div>
        <div className="supporting-text text-center w-[60%] mt-4">{t('templates:home.about.mission.supportingText')}</div>
      </div>

      <div className="flex flex-col gap-4 w-full pt-[7.5rem]">
        <div className="flex gap-4 grid-cols-2 flex-col auto-rows-auto w-full lg:flex-row">
          <div className="home-sm-card border-[0.1px] border-[#9b8f7e66] rounded-md justify-center items-center w-full h-[50vh] flex relative overflow-hidden order-1 lg:order-none lg:w-[35%] group">
                <Image src={homepage1} alt="" className="
                  transition ease-in-out duration-300 group-hover:scale-110
                  object-cover w-full max-w-full h-full inline-block"
                />
          </div>

          <ActiveLink href={'/'} className="home-lg-card border-[0.1px] border-[#9b8f7e66] rounded-md items-start w-full h-[50vh] p-10 flex relative overflow-hidden lg:w-[65%] group">
                <div className="card-content z-[2] gap-6 flex flex-col items-start relative">
                  <div className="big-txt w-[85%]">
                    <div className="leading-[1.3] text-[1.3rem] lg:text-[1.4rem] dark:text-[#161e2e]">{t('templates:home.about.essence.title')}</div>
                  </div>
                  <div className="small-txt flex items-center gap-[1rem]">
                    <div className="text-sm font-bold dark:text-[#161e2e]">{t('templates:home.about.essence.actionText')}</div>
                    <button className="
                      transition ease-in-out duration-300 group-hover:translate-x-2
                      text-[20px] opacity-80 hover:opacity-100 ml-0 dark:text-[#161e2e]">
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <Image src={homepage2} alt="" className="
                    transition ease-in-out duration-300 group-hover:scale-110
                    object-cover w-full max-w-full h-full inline-block"
                  />
                </div>
          </ActiveLink>
        </div>

        <div className="flex gap-4 grid-cols-2 flex-col auto-rows-auto w-full lg:flex-row">
          <ActiveLink href={'/'} className="home-lg-card border-[0.1px] border-[#9b8f7e66] rounded-md items-start w-full h-[50vh] p-10 flex relative overflow-hidden lg:w-[65%] group">
            <div className="card-content z-[2] gap-6 flex flex-col items-start relative">
              <div className="big-txt w-[85%]">
                <div className="leading-[1.3] text-[1.3rem] lg:text-[1.4rem] dark:text-[#161e2e]">{t('templates:home.about.drive.title')}</div>
              </div>
              <div className="small-txt flex items-center gap-[1rem]">
                <div className="text-sm font-bold dark:text-[#161e2e]">{t('templates:home.about.drive.actionText')}</div>
                <button className="
                  transition ease-in-out duration-300 group-hover:translate-x-2
                  text-[20px] opacity-80 hover:opacity-100 dark:text-[#161e2e]">
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="absolute inset-0">
              <Image src={homepage3} alt="" className="
                transition ease-in-out duration-300 group-hover:scale-110
                object-cover w-full max-w-full h-full inline-block"
              />
            </div>
          </ActiveLink>

          <div className="home-sm-card border-[0.1px] border-[#9b8f7e66] rounded-md justify-center items-center w-full h-[50vh] flex relative overflow-hidden order-1 lg:order-none lg:w-[35%] group">
            <div className="relative h-full w-full">
              <div className="flex flex-col gap-[50px] justify-center items-center h-full">
                <div className="relative flex justify-center items-center z-[12]">
                  <div className={cn(lilita_one.className, "absolute text-[120px] font-extrabold text-[var(--color-hint)] z-[11]")}>X</div>
                  <div className={cn(neonderthaw.className, "absolute text-[80px] text-white z-[12] whitespace-nowrap")} 
                  style={{
                    "transform": "rotate(-7deg)",
                    "transformOrigin": "left bottom"
                  }}
                  >10!!</div>
                </div>
                <ActiveLink href={'/'} className="flex items-center bg-white z-[11] p-4 gap-4 border-b rounded-sm transition-all duration-200 relative">
                    <span className="dark:text-[#161e2e]">
                      Everything IP
                    </span>
                    <button className="
                      transition ease-in-out duration-300 group-hover:translate-x-2
                      text-[20px] opacity-80 hover:opacity-100 dark:text-[#161e2e]">
                      <BsArrowRight />
                    </button>
                </ActiveLink>
              </div>
              <div className="sm-card-overlay absolute inset-0 z-[10]  w-full h-full bg-black opacity-[0.7]"></div>
            </div>
            <div className="absolute inset-0">
              <Image src={homepage4} alt="" className="
                transition ease-in-out duration-300 group-hover:scale-110
                object-cover w-full max-w-full h-full inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomeFooter() {
  return (
    <div>
      <div className="flex justify-center w-full pb-[5rem]">
        <Logo onFooter={true} />
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 gap-[5rem] items-start flex-wrap pb-[5rem] max-w-[40rem] md:grid-cols-4">
          <div className="flex flex-col items-center justify-start gap-[0.75rem]">
            <div className="text-[1.5rem]">Explore</div>
            <div className="footer-links flex flex-col items-center justify-start gap-4">
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Home</ActiveLink>
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Explore</ActiveLink>
            </div>
          </div>
       
          <div className="flex flex-col items-center justify-start gap-[0.75rem]">
            <div className="text-[1.5rem]">Support</div>
            <div className="footer-links flex flex-col items-center justify-start gap-4">
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">FAQ</ActiveLink>
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Contact</ActiveLink>
            </div>
          </div>
       
          <div className="flex flex-col items-center justify-start gap-[0.75rem]">
            <div className="text-[1.5rem]">Others</div>
            <div className="footer-links flex flex-col items-center justify-start gap-4">
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Documentation</ActiveLink>
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Changelog</ActiveLink>
            </div>
          </div>
       
          <div className="flex flex-col items-center justify-start gap-[0.75rem]">
            <div className="text-[1.5rem]">Community</div>
            <div className="footer-links flex flex-col items-center justify-start gap-4">
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Patron</ActiveLink>
              <ActiveLink href={'/'} className="text-[#8e8c87] text-base font-normal no-underline transition-all duration-20 hover:text-[#151515] hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">Buy Coffee</ActiveLink>
            </div>
          </div>
        </div>
      </div>

      <SocialLinks />

    </div>
  )
}
 
export default function Home() {
  const isMounted = useIsMounted();
  
  return (
      isMounted && (
        <div className="">
          <div className="px-4 sm:px-6 lg:px-20 3xl:px-30">
            <HomeHeader/>
          </div>

          <section className="section-1 lg:px-20 3xl:px-30">
            <BannerSection />
          </section>
          
          <section className="section-2 px-4 sm:px-6 lg:px-20 3xl:px-30 relative mt-8 pt-[7.5rem] pb-[7.5rem] bg-[#ebebeb] dark:bg-light-dark">
            <AboutSection />
          </section>

          <footer className="section-2 px-4 sm:px-6 lg:pt-20 lg:pb-12 3xl:px-30 relative mt-8 pt-[7.5rem] pb-[7.5rem]">
            <HomeFooter />
          </footer>
        </div>
      )
  );
}

