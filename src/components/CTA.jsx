export default function CTA() {
  return (
    <section id="contact" className="py-16" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-indigo-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">מוכנים לעשות סדר בתהליכים?</h3>
          <p className="text-slate-600 mt-2">השאירו פרטים ונחזור לתאם הדגמה מותאמת אישית.</p>
          <form className="mt-6 grid sm:grid-cols-3 gap-3 text-right">
            <input className="sm:col-span-1 h-11 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="שם מלא" />
            <input className="sm:col-span-1 h-11 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="אימייל עסקי" />
            <button type="button" className="sm:col-span-1 h-11 px-4 rounded-xl bg-[#b6bdff] text-slate-900 font-semibold hover:shadow-sm">שליחת בקשה</button>
          </form>
          <p className="text-xs text-slate-500 mt-3">על ידי שליחה, אתם מאשרים יצירת קשר מטעם URP.</p>
        </div>
      </div>
    </section>
  );
}
