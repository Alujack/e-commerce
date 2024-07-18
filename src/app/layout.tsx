import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import { DataProvider } from "@/context/productContext";
import RootLayoutClient from './RootLayoutClient';
import { getSession } from "next-auth/react";
async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  console.log(JSON.stringify(session))
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
          <RootLayoutClient image={session?.user.image}>{children}</RootLayoutClient>
        </DataProvider>
      </body>
    </html>
  );
}
export default RootLayout;