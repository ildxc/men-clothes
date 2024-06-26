import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./Providers";

export const metadata = {
    title: "Tienda de ropa para hombres",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Navbar />
                    <div className="pt-[180px]">{children}</div>
                </Providers>
            </body>
        </html>
    );
}