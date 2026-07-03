import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { productService } from "@/services/product.service";
import Logo from "../assets/logo.png";
import HeroBg from "../assets/hero.jpg";

export default function SplashScreen() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(async () => {
                const isEmpty = await productService.isEmpty();
                if (isEmpty) {
                    navigate("/welcome");
                } else {
                    navigate("/dashboard");
                }
            }, 600);

            return () => clearTimeout(timer);
        }
    }, [isVisible, navigate]);

    return (
        <div
            className={[
                "relative flex flex-col h-full grow items-center justify-center gap-1 overflow-hidden",
                "transition-all duration-500 ease-in-out",
                isVisible ? "opacity-100" : "opacity-0 scale-95",
            ].join(" ")}
        >
            {/* Background UMKM dengan blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroBg}
                    alt="UMKM Background"
                    className="w-full h-full object-cover blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
            </div>

            {/* Konten utama */}
            <div className="relative z-10 flex flex-col items-center gap-1">
                <img src={Logo} alt="Logo" className="w-36 h-36 mb-4 drop-shadow-lg" />
                <span className="text-4xl font-extrabold tracking-tight text-slate-700">
                    Selamat Datang
                </span>
                <span className="text-base font-light italic text-slate-400 -mt-1">
                    di
                </span>
                <span className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 mt-1 mb-2">
                    Cost Wise
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 bg-slate-100 px-4 py-1.5 rounded-full">
                    Aplikasi Pengelola HPP
                </span>
            </div>
        </div>
    );
}