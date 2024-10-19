export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>{children}</body>
    </html>
  );
}

// // layout.tsx
// 'use client'; // Important for using hooks in a layout component

// import { useEffect } from 'react';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   useEffect(() => {
//     // Disable right-click context menu
//     const handleContextMenu = (event: MouseEvent) => {
//       event.preventDefault();
//     };

//     // Disable developer tools shortcuts (e.g., F12, Ctrl+Shift+I, Ctrl+Shift+J)
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (
//         event.key === 'F12' ||
//         (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J'))
//       ) {
//         event.preventDefault();
//         console.log('Disabled key combination:', event.key); // Debugging line
//       }
//     };

//     // Add event listeners for disabling right-click and keyboard shortcuts
//     window.addEventListener('contextmenu', handleContextMenu);
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup event listeners on component unmount
//     return () => {
//       window.removeEventListener('contextmenu', handleContextMenu);
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
