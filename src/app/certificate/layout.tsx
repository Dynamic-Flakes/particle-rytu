
'use client';

import CertificateLayout from '@/layouts/certificate/layout';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<CertificateLayout>{children}</CertificateLayout>)
}
