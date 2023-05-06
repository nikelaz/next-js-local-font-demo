import localFont from 'next/font/local';
import './global.css';

const oswaldFont = localFont({
  src: './Oswald-Regular.ttf',
  display: 'swap',
});

export const metadata = { title: 'Next.js Fonts' };

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={oswaldFont.className}>{children}</body>
  </html>
);

export default RootLayout;
