export default function Features() {
  const items = [
    { title: 'אמון וביטחון מובנים', desc: 'אבטחה ארגונית, הרשאות גרנולריות ושקיפות מלאה על שימוש בנתונים.', icon: '🔒' },
    { title: 'גמישות וסקייל', desc: 'מתאימה לצוותים קטנים ועד ארגונים מתרחבים — ללא סיבוך מיותר.', icon: '🧩' },
    { title: 'חדשנות פרקטית', desc: 'אלגוריתמיקה חכמה המתרגמת נתונים לתובנות ותהליכים אמיתיים.', icon: '✨' },
    { title: 'מדידות בזמן אמת', desc: 'דשבורדים חיים, התראות ממוקדות ו-API פתוח לשילוב בכל מערכת.', icon: '📈' },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-indigo-50/40" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">ליבה חזקה, חוויה ידידותית</h2>
          <p className="text-slate-600 mt-2">כל מה שצריך כדי להבין תהליכים ולקבל החלטות נכונות — במקום אחד.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm hover:shadow transition">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
