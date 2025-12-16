import "./globals.css";
import Loader from "./components/LoaderWrapper";

export const metadata = {
  metadataBase: new URL("https://wiresavvy.com"),

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased px-6 md:px-10 lg:px-16">
        <Loader>
          {children}
        </Loader>
      </body>
    </html>
  );
}
