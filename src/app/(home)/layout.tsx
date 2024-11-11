'use client';

import HomeLayout from '@/layouts/home/layout';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<HomeLayout>{children}</HomeLayout>)
}
