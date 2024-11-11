import routes from '@/config/routes';
import { PlusCircle } from '@/components/icons/plus-circle';

import { GoRocket } from "react-icons/go";
import { IoSettingsOutline, IoWalletOutline } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { LiaCopyrightSolid } from "react-icons/lia";
import { GrFavorite } from "react-icons/gr";
import { LAYOUT_OPTIONS } from '@/lib/constants';

export const defaultMenuItems = [
  {
    name: 'Explorer',
    alias: 'Explorer',
    icon: <GoRocket className="text-[24px]" />,
    href: '/',
    layout: LAYOUT_OPTIONS.EXPLORER
  },
  {
    name: 'Right to Use',
    alias: 'Right to Use',
    icon: <LiaCopyrightSolid className="text-[26px]" />,
    href: routes.search,
    layout: LAYOUT_OPTIONS.EXPLORER,
    dropdownItems: [
      {
        name: 'Create RYTU',
        alias: 'Create RYTU',
        icon: <PlusCircle />,
        href: routes.createRytu,
        layout: LAYOUT_OPTIONS.EXPLORER,
      },
      {
        name: 'Request RYTU',
        alias: 'Request RYTU',
        icon: <PlusCircle />,
        href: routes.requestRytu,
        layout: LAYOUT_OPTIONS.EXPLORER,
      },
      {
        name: 'My RYTUs',
        alias: 'My RYTUs',
        icon: <PlusCircle />,
        href: routes.myRytu,
        layout: LAYOUT_OPTIONS.EXPLORER,
      },
      {
        name: 'Create Pre-RYTU',
        alias: 'Create Pre-RYTU',
        icon: <PlusCircle />,
        href: routes.createPreRytu,
        layout: LAYOUT_OPTIONS.EXPLORER,
      },
    ],
  },
  {
    name: 'Verify Ownership',
    alias: 'Verify Ownership',
    icon: <MdSecurity className="text-[26px]" />,
    href: routes.certificate(1),
    layout: LAYOUT_OPTIONS.CERTIFICATE,
  },
  {
    name: 'Wallet',
    alias: 'Wallet',
    icon: <IoWalletOutline className="text-[26px]" />,
    href: routes.wallet,
    layout: LAYOUT_OPTIONS.USER,
  },
  {
    name: 'Settings',
    alias: 'Settings',
    icon: <IoSettingsOutline className="text-[26px]" />,
    href: routes.profile,
    layout: LAYOUT_OPTIONS.USER,
    dropdownItems: [
      {
        name: 'Reset password',
        alias: 'Reset password',
        href: routes.settings,
        layout: LAYOUT_OPTIONS.USER,
      },
    ],
  },
  {
    name: 'Favorite',
    alias: 'Favorite',
    icon: <GrFavorite className="text-[26px]" />,
    href: routes.favorite,
    layout: LAYOUT_OPTIONS.USER,
  },
  
];