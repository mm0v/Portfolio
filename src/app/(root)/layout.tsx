// import Footer from "./footer/page";
// import Navbar from "./navbar/page";
// import "../../../public/assets/css/global.css";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <main className="font-inter">
//       <Navbar />
//       {children}
//       <Footer />
//     </main>
//   );
// }

import Footer from "./footer/page";
import Navbar from "./navbar/page";
import "../../../public/assets/css/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="font-inter">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
