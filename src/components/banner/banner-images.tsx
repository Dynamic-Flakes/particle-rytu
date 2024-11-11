import React from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import ad1 from '@/assets/images/collection/grid/collection-5.jpg';
import ad2 from '@/assets/images/collection/grid/collection-7.jpg';
import ad3 from '@/assets/images/collection/grid/collection-1.jpg';

const BannerImages = () => {
  return (
    <div className="relative flex-1 hidden md:block">
      <Transition
        appear
        show={true}
        enter="transform transition ease-out duration-1000"
        enterFrom="translate-x-8 rotate-12 opacity-0"
        enterTo="translate-x-0 rotate-12 opacity-95"
        leave="transform transition ease-in duration-1000"
        leaveFrom="translate-x-0 rotate-12 opacity-95"
        leaveTo="translate-x-8 rotate-12 opacity-0"
      >
        <Image
          src={ad1}
          alt="Image 1"
          className="absolute top-[-140px] right-2 w-[170px] rounded-lg border border-white opacity-95 animate-bounceLeftSlow"
        />
      </Transition>

      <Transition
        appear
        show={true}
        enter="transform transition ease-out duration-1000 delay-100"
        enterFrom="translate-x-10 rotate-12 opacity-0"
        enterTo="translate-x-0 rotate-12 opacity-95"
        leave="transform transition ease-in duration-1000"
        leaveFrom="translate-x-0 rotate-12 opacity-95"
        leaveTo="translate-x-10 rotate-12 opacity-0"
      >
        <Image
          src={ad2}
          alt="Image 2"
          className="absolute top-[-160px] right-10 w-[190px] rounded-lg border border-white opacity-95 animate-bounceLeftMedium"
        />
      </Transition>

      <Transition
        appear
        show={true}
        enter="transform transition ease-out duration-1000 delay-200"
        enterFrom="translate-x-12 rotate-12 opacity-0"
        enterTo="translate-x-0 rotate-12 opacity-95"
        leave="transform transition ease-in duration-1000"
        leaveFrom="translate-x-0 rotate-12 opacity-95"
        leaveTo="translate-x-12 rotate-12 opacity-0"
      >
        <Image
          src={ad3}
          alt="Image 3"
          className="absolute top-[-180px] right-[120px] w-[210px] rounded-lg border border-white opacity-95 animate-bounceLeftFast"
        />
      </Transition>
    </div>
  );
};

export default BannerImages;
