import Header from "@/Components/Shared/Header/Header";
import "./globals.css";

export const metadata = {
  title: "MedicX ",
  description: "A Digital Health Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <Header/>
      <body className="h-full bg-gray-50">{children}</body>
    </html>
  );
}
