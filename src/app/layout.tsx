import type { Metadata } from "next";
import { geistSans, geistMono, fira_code } from "./fonts/fonts";
import cn from "@/utils/cn";
import { ThemeProvider } from "./shared/theme-provider";
// Base css
import "@/assets/css/scrollbar.css";
import "@/assets/css/globals.css";
import "@/assets/css/range-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LocaleProvider } from "./shared/locale-context";
import ModalsContainer from "@/components/modal-views/container";
import { Suspense } from "react";
import DrawersContainer from "@/components/drawer-views/container";
import { ToastConfig } from "@/lib/toast-config";
import { ParticleSSO } from "@/components/auth/sso-context";

export const metadata: Metadata = {
  title: "RYTU",
  description: "Welcome to Right-to-Use",
  icons: {
    icon: {
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = "en";

  return (
    <html
      lang={initialLocale}
      dir="ltr"
      className={cn("light", fira_code.className)}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
      </head>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
        suppressHydrationWarning
      >
        <LocaleProvider initialLocale={initialLocale}>
          <ThemeProvider>
            <Suspense fallback={null}>
              <ModalsContainer />
              <DrawersContainer />
            </Suspense>
            <ParticleSSO>{children}</ParticleSSO>
            <ToastConfig />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
