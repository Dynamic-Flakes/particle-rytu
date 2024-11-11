import { Fira_Code, Roboto, Ephesis, Neonderthaw, Lilita_One, Russo_One } from 'next/font/google';
import localFont from "next/font/local";

export const fira_code = Fira_Code({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const ephesis = Ephesis({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const neonderthaw = Neonderthaw({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const lilita_one = Lilita_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const russo_one = Russo_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const geistSans = localFont({
    src: "GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const geistMono = localFont({
  src: "GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});