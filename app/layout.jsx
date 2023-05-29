import "@styles/globals.css";

import Nav from "@components/Nav";
import CustomProvider from "../components/Provider";

export const metadata = {
  title: "Image Gallery",
  description: "Browse through different images",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>

      <CustomProvider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {/* The NavBar will be set to the Layout
          file to provide global re-usability across our pages */}
          <Nav />
          {children}
        </main>
      </CustomProvider>

    </body>
  </html>
);

export default RootLayout;
