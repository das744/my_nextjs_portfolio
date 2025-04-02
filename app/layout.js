import '@fortawesome/fontawesome-free/css/all.min.css';

import '../style/globals.css';

export const metadata = {
  title: "Portfolio Website",
  description: "I am a freelance Web Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

