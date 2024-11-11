'use client';

import Image from '@/components/shared/image';
import AnchorLink from '@/components/shared/links/anchor-link';
import { Verified } from '@/components/icons/verified';
import Avatar from '@/components/shared/avatar';
import { StaticImageData } from 'next/image';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import routes from '@/config/routes';
import { getRandomNFTImage } from '@/data/utils/loadImages';

import { GrFavorite } from "react-icons/gr";
import { TbShoppingCartPlus } from "react-icons/tb";
import Button from './button';

type NFTGridProps = {
  id: string | number;
  author: string;
  authorImage: StaticImageData;
  image: StaticImageData;
  name: string;
  collection: string;
  price: string;
};

export default function NFTGrid({
  id,
  author,
  authorImage,
  image,
  name,
  collection,
  price,
}: NFTGridProps) {
  const { layout } = useLayout();

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark">
      <div className="p-4"
        // flex absolute top-[10px] left-[10px] z-20 rounded-[20px] p-0 pr-[20px] bg-[#0000008c]
      >
        <AnchorLink
          href={
            (layout === LAYOUT_OPTIONS.EXPLORER ? '' : `/${layout}`) +
            routes.profile
          }
          className="flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          // flex items-center text-sm font-medium text-gray-300 hover:text-white
        >
          <Avatar
            image={authorImage}
            alt={name}
            size="sm"
            className="text-ellipsis ltr:mr-3 rtl:ml-3 dark:border-gray-500"
          />
          <span className="overflow-hidden text-ellipsis">@{author}</span>
        </AnchorLink>
      </div>
      <AnchorLink
        href={
          (layout === LAYOUT_OPTIONS.EXPLORER ? '' : `/${layout}`) +
          routes.rytuDetails('music', id)
        }
        className="relative block w-full"
      >
        <Image
          src={getRandomNFTImage()}
          placeholder="blur"
          width={450}
          height={450}
          alt=""
          className="w-full"
        />
      </AnchorLink>

      <div className="p-5">
        <AnchorLink
          href={
            (layout === LAYOUT_OPTIONS.EXPLORER ? '' : `/${layout}`) +
            routes.rytuDetails('music', id)
          }
          className="text-sm font-medium text-black dark:text-white"
        >
          {name}
        </AnchorLink>
        <div className="mt-1.5 flex">
          <AnchorLink
            href={
              (layout === LAYOUT_OPTIONS.EXPLORER ? '' : `/${layout}`) +
              routes.rytuDetails('music', id)
            }
            className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400
            ltr:pr-4 rtl:pl-4
            "
          >
            {collection}
          </AnchorLink>
          <AnchorLink  
             href={`${LAYOUT_OPTIONS.CERTIFICATE}/${routes.certificate(id)}`}
            className='inline-flex items-center text-xs text-[var(--color-hint)] dark:text-[var(--color-accent)]
            border-dashed border-gray-200 justify-end dark:border-gray-700  ltr:pl-4 rtl:pr-4 ltr:border-l rtl:border-r'
          >
            <div>Verified</div>
            <Verified className="ltr:ml-1 rtl:mr-1" />
          </AnchorLink>
        </div>
        <div className='flex mt-4 justify-between'>
          <div className="text-lg font-medium text-gray-900 dark:text-white">
            {price}
          </div>
          <div className='flex gap-[30px] lg:gap-[20px] text-[24px] cursor-pointer text-gray-900 dark:text-white'>
            <GrFavorite />
            <TbShoppingCartPlus />
          </div>
        </div>
        {/* <Button shape="rounded" className='mt-4 w-full dark:bg-[rgba(50,55,67,1)]'>
          BUY FOR {price}
        </Button> */}
      </div>
    </div>
  );
}
