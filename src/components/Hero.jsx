import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" dir="rtl">
      <div className="relative h-[72vh] min-h-[520px] w-full">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-indigo-100 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start text-xs font-medium text-indigo-800 bg-[#b6bdff]/40 border border-indigo-200 rounded-full px-3 py-1">
              <span>תובנות תהליכיות בזמן אמת</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              URP — בינה תהליכית לעסקים קטנים ובינוניים
            </h1>
            <p className="text-slate-600 text-lg">
              פלטפורמה מודרנית שמאפשרת לראות, למדוד ולשפר תהליכים תפעוליים — במהירות, באמינות ובגמישות מלאה.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <button className="h-11 px-5 rounded-xl bg-[#b6bdff] text-slate-900 font-semibold shadow-sm hover:shadow transition">בקשת דמו</button>
              <button className="h-11 px-5 rounded-xl border border-indigo-200 text-indigo-800 hover:bg-indigo-50 transition">שיחת היכרות</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
