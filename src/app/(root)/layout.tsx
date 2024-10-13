import Footer from "./footer/page";
import Navbar from "./navbar/page";
import "../../../public/assets/css/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-inter">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
