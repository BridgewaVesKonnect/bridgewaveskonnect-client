import { Initialize, Provider } from "@/src/state";
import { ThemeRepository } from "@/src/theme";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="anonymous"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
               rel="stylesheet"
            />

            <link
               rel="icon"
               href="https://bridgewaveskonnect.com/static/images/favicon.ico"
            />
         </head>
         <body>
            <Provider>
               <Initialize>
                  <ThemeRepository>{children}</ThemeRepository>
               </Initialize>
            </Provider>
         </body>
      </html>
   );
}
