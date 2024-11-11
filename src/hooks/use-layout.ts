'use client';

import { atom, useAtom } from 'jotai';
import { LAYOUT_OPTIONS } from '@/lib/constants';

// 1. set initial atom for rytu layout
const rytuLayoutAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('rytu-layout')
    : LAYOUT_OPTIONS.EXPLORER
);

const rytuLayoutAtomWithPersistence = atom(
  (get) => get(rytuLayoutAtom),
  (get, set, newStorage: LAYOUT_OPTIONS) => {
    set(rytuLayoutAtom, newStorage);
    localStorage.setItem('rytu-layout', newStorage);
  }
);

// 2. useLayout hook to check which layout is available
export function useLayout() {
  const [layout, setLayout] = useAtom(rytuLayoutAtomWithPersistence);
  return {
    layout: layout === null ? LAYOUT_OPTIONS.EXPLORER : layout,
    setLayout,
  };
}
