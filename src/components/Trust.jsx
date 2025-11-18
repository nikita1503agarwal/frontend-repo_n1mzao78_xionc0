export default function Trust() {
  return (
    <section id="trust" className="py-20 bg-gradient-to-b from-indigo-50/40 to-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">אמון, אבטחה וציות</h2>
            <p className="text-slate-600 mt-3">מנגנוני אבטחה מתקדמים, הצפנה מקצה לקצה, בקרות זהות והרשאות תואמות תקני תעשייה.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• תאימות: SOC 2 (בהטמעה), GDPR, ותקני פרטיות מקומיים.</li>
              <li>• נראות: לוגים ניתנים לביקורת ומעקב פעילות מלא.</li>
              <li>• פרטיות: הפרדת מידע וסגמנטציה לפי סביבות ויישויות.</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50 flex items-center justify-center text-emerald-700">
              אזור המחשה/לוגואים של לקוחות/שותפים (מקום לשילוב בהמשך)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
