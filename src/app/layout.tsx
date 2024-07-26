import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import RootLayoutClient from './layoutRoot';
import Provider from '@/redux/provider';
import { Setup } from '@/components/utils'; 
import { DataProvider } from "@/context/productContext";
async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Techness</title>
        <meta name="description" content="Your website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <DataProvider>
        <Provider>
          <Setup />
          <RootLayoutClient>
             {children}
          </RootLayoutClient>
        </Provider>
        </DataProvider>
      </body>
    </html>
  );
}
export default RootLayout;