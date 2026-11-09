import React from "react";

export default function App() {
  // รายการผลงานบทภาพยนตร์ (รูปทุกรูปสัดส่วนเท่ากัน 2:3)
  const movies = [
    {
      id: 1,
      title: "ชื่อภาพยนตร์เรื่องที่ 1",
      genre: "ระทึกขวัญ / ดราม่า",
      role: "เขียนบท (Screenwriter)",
      coverImage: "ใส่_URL_รูปภาพตรงนี้",
      synopsis: "เรื่องย่อสั้นๆ ของภาพยนตร์เรื่องที่หนึ่ง...",
      status: "บทเสร็จสิ้น",
    },
    {
      id: 2,
      title: "ชื่อภาพยนตร์เรื่องที่ 2",
      genre: "สืบสวน / ปริศนา",
      role: "เขียนบท (Screenwriter)",
      coverImage: "ใส่_URL_รูปภาพตรงนี้",
      synopsis: "เรื่องย่อสั้นๆ ของภาพยนตร์เรื่องที่สอง...",
      status: "กำลังพัฒนาบท",
    },
    {
      id: 3,
      title: "ชื่อภาพยนตร์เรื่องที่ 3",
      genre: "สยองขวัญ / ลึกลับ",
      role: "เขียนบท (Screenwriter)",
      coverImage: "ใส่_URL_รูปภาพตรงนี้",
      synopsis: "เรื่องย่อสั้นๆ ของภาพยนตร์เรื่องที่สาม...",
      status: "กำลังพัฒนาบท",
    },
    {
      id: 4,
      title: "ชื่อภาพยนตร์เรื่องที่ 4",
      genre: "ไซไฟ / เอาชีวิตรอด",
      role: "เขียนบท (Screenwriter)",
      coverImage: "ใส่_URL_รูปภาพตรงนี้",
      synopsis: "เรื่องย่อสั้นๆ ของภาพยนตร์เรื่องที่สี่...",
      status: "บทเสร็จสิ้น",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-12 px-4 sm:px-6 md:px-12">
      {/* Header เรียบหรูสไตล์ภาพยนตร์ */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-black tracking-wider text-white mb-3">
          STAYING<span className="text-indigo-500">+</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base tracking-wide">
          SCREENWRITING PORTFOLIO • ผลงานเขียนบทภาพยนตร์
        </p>
      </header>

      {/* Main Grid แสดงโปสเตอร์เรียงต่อกัน */}
      <main className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/60 hover:border-indigo-500 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* ส่วนรูปโปสเตอร์ ล็อกสัดส่วน 2:3 (Aspect Ratio เท่ากันเป๊ะทุกรูป) */}
              <div className="w-full aspect-[2/3] bg-slate-700/50 relative overflow-hidden flex items-center justify-center">
                {item.coverImage &&
                item.coverImage !== "ใส่_URL_รูปภาพตรงนี้" ? (
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  // พื้นหลังสำรองเวลาที่ยังไม่ได้ใส่รูป
                  <div className="text-center p-4 text-slate-500">
                    <span className="text-xs font-mono">POSTER 2:3</span>
                  </div>
                )}
              </div>

              {/* รายละเอียดภาพยนตร์ */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3 gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 truncate">
                      {item.genre}
                    </span>

                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${
                        item.status === "บทเสร็จสิ้น"
                          ? "bg-emerald-900/40 text-emerald-300 border-emerald-700/50"
                          : "bg-amber-900/40 text-amber-300 border-amber-700/50"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-1 line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-indigo-400 font-medium mb-3">
                    {item.role}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-4">
                    {item.synopsis}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
