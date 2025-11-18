export default function Screens() {
  return (
    <section id="screens" className="py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">מסכי מערכת</h2>
            <p className="text-slate-600 mt-2">מקום מסודר לשילוב צילומי מסך מתוך המערכת שלכם.</p>
          </div>
          <a href="#contact" className="hidden sm:inline text-indigo-700 hover:text-indigo-900">בקשת דמו →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[16/10] rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/40 flex items-center justify-center text-indigo-700">
            כאן ישולב צילום מסך: דשבורד תהליכים
          </div>
          <div className="aspect-[16/10] rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/40 flex items-center justify-center text-indigo-700">
            כאן ישולב צילום מסך: מפה תפעולית
          </div>
          <div className="aspect-[16/10] rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/40 flex items-center justify-center text-indigo-700">
            כאן ישולב צילום מסך: KPI בזמן אמת
          </div>
          <div className="aspect-[16/10] rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/40 flex items-center justify-center text-indigo-700">
            כאן ישולב צילום מסך: תובנות וזרימות
          </div>
        </div>
      </div>
    </section>
  );
}
