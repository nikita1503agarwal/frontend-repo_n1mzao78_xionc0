import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" dir="rtl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#b6bdff] shadow-inner shadow-indigo-200/60 ring-1 ring-indigo-300 flex items-center justify-center font-bold text-slate-800">U</div>
          <span className="text-slate-900 font-semibold tracking-tight">URP</span>
          <span className="hidden md:inline text-slate-500">• בינה תהליכית ל-SMB</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition">יכולות</a>
          <a href="#screens" className="text-slate-600 hover:text-slate-900 transition">מסכים</a>
          <a href="#trust" className="text-slate-600 hover:text-slate-900 transition">אמון וביטחון</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">צור קשר</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">דברו איתנו</button>
          <button className="inline-flex h-9 px-4 rounded-lg bg-[#b6bdff] text-slate-900 font-medium shadow-sm hover:shadow md:hover:-translate-y-0.5 transition">בקשת דמו</button>
          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-700"><Menu size={18} /></button>
        </div>
      </nav>
    </header>
  );
}
