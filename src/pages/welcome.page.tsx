import { useNavigate } from "react-router";
import HeroBg from "../assets/hero.jpg";

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col h-full grow items-center justify-center gap-6 overflow-hidden px-8">
            {/* Background dengan blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroBg}
                    alt="UMKM Background"
                    className="w-full h-full object-cover blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white/70 to-blue-50/80 backdrop-blur-sm" />
            </div>

            {/* Konten utama */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Heading */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center shadow-md ring-4 ring-white/80">
                        <span className="text-4xl">👋</span>
                    </div>
                    <span className="text-3xl font-extrabold tracking-tight text-slate-800 text-center">
                        Selamat Datang
                    </span>
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-slate-600 text-center max-w-xs leading-relaxed">
                    Aplikasi ini membantu Anda menghitung:
                </p>

                {/* Checklist Fitur */}
                <ul className="flex flex-col gap-3 text-sm">
                    <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-sm">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-600 text-xs font-bold">✓</span>
                        </span>
                        <span className="text-slate-700 font-medium">HPP Produk</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-sm">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-600 text-xs font-bold">✓</span>
                        </span>
                        <span className="text-slate-700 font-medium">Harga Jual</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-sm">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-600 text-xs font-bold">✓</span>
                        </span>
                        <span className="text-slate-700 font-medium">Margin</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-sm">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-600 text-xs font-bold">✓</span>
                        </span>
                        <span className="text-slate-700 font-medium">Laba</span>
                    </li>
                </ul>

                {/* Info tambahan */}
                <div className="flex flex-col items-center gap-0.5">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="text-blue-500">🖥</span>
                        Data disimpan di perangkat Anda.
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="text-blue-500">🔒</span>
                        Tidak perlu membuat akun.
                    </span>
                </div>

                {/* Tombol Mulai */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="mt-2 px-12 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                    Mulai
                </button>
            </div>
        </div>
    );
}