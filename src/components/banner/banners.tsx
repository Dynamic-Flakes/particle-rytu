import React from 'react';
import Image from '@/components/shared/image';
import banner1 from '@/assets/images/banner/banner1.png'
import banner2 from '@/assets/images/banner/banner2.png'
import BannerImages from './banner-images';
import ActiveLink from '../shared/links/active-link';

const RectangularBanner = () => {
  return (
    <div className="relative flex items-center w-full h-[320px] p-4 text-white 5xl:overflow-hidden rounded-lg">
       <div className="absolute inset-0 overflow-hidden rounded-lg -z-10">
        <Image
          src={banner1}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="flex-1 pl-5 pr-1 w-full">
        <h2 className="text-[30px] font-extrabold leading-tight max-w-[100%]">
            Discover the New and Exclusive Collection set from <span className="text-[var(--color-accent-2)] cursor-pointer">@tylermajor</span>
        </h2>
        <div className="flex gap-2 mt-4">
          <ActiveLink href="/">
            <button className="border border-white text-white py-2 px-4 rounded transition-all hover:bg-white hover:text-black">
              Explore collections
            </button>
          </ActiveLink>
          {/* <ActiveLink href="">
            <button className="border border-white text-white py-2 px-4 rounded transition-all hover:bg-white hover:text-black">
              Follow Author
            </button>
          </ActiveLink> */}
        </div>
      </div>

      <BannerImages />
    </div>
  );
};

const SquareBanner = () => {
    const banner2Url = '@/assets/images/banner/banner2.png';

  return (
    <div className="hidden lg:flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat text-white rounded-lg"
         style={{ backgroundImage: banner2Url }}>
      <div className="flex flex-col items-center border border-green-400 bg-white/30 p-5 rounded-lg">
        <h2 className="text-[30px] font-bold text-[#003f42] leading-tight">
          RYTU Chrome Extension
        </h2>
        <button className="mt-5 py-2 px-4 bg-red-400 text-white border border-red-400 rounded transition-all hover:bg-red-500">
          Download here
        </button>
      </div>
    </div>
  );
};

export { RectangularBanner, SquareBanner };
