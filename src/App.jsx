import React from "react";

export default function App() {
  // รายการผลงานทั้งหมด เรียงต่อกันตามลำดับที่ต้องการแสดง
  const works = [
    {
      id: 1,
      title: "เกมทศชาติ",
      genre: "ระทึกขวัญ / เอาชีวิตรอด",
      coverImage:
        "https://lh3.googleusercontent.com/d/1zKqNyvf-NIgtToL1UjGUlqNBzcvhJBmT",
      synopsis:
        "เรื่องราวการเอาชีวิตรอดในเกมทศชาติ ชะตากรรมที่ต้องดิ้นรนเพื่อหาทางรอด...",
      status: "จบแล้ว",
      link: "https://www.readawrite.com/a/1887055b30b942d9a49c4657995bbe59?r=my_page",
    },
    {
      id: 2,
      title: "รักแรกเฮี้ยน",
      genre: "โรมานซ์ / ระทึกขวัญ / ปริศนา",
      coverImage:
        "https://lh3.googleusercontent.com/d/1VUTrQSTx01cNIgPnI_9uEoBoevsHWxVi",
      synopsis: "เรื่องย่อสั้นๆ น่าติดตามของนิยายเรื่องนี้...",
      status: "กำลังเขียน",
      link: "https://www.readawrite.com/a/8c217ba5a844593692709f4e47c9fb4a?r=my_page",
    },
    {
      id: 3,
      title: "ฉันสลับร่างกับเธอที่เป็นลูกฆาตกรต่อเนื่อง",
      genre: "สืบสวน / ระทึกขวัญ / ลึกลับ",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่3",
      synopsis: "เรื่องย่อสั้นๆ ของเรื่องที่สาม...",
      status: "กำลังเขียน",
      link: "https://www.readawrite.com/a/e89f70261c49cd1209d76bdb7e73d845?r=my_page",
    },
    {
      id: 4,
      title: "ทฤษฎีลับ อาหารมื้อสุดท้าย",
      genre: "สืบสวน / ระทึกขวัญ / ลึกลับ",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่4",
      synopsis: "เรื่องย่อสั้นๆ ของเรื่องที่สี่...",
      status: "จบแล้ว",
      link: "https://www.readawrite.com/a/4f6cb6cfa2e3e86caade1906abac48e2?r=my_page",
    },
    {
      id: 5,
      title: "วิชาแจ้งข่าวร้าย",
      genre: "โรมานซ์ / ดราม่า",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่5",
      synopsis: "เรื่องย่อสั้นๆ ของเรื่องที่ห้า...",
      status: "กำลังเขียน",
      link: "https://www.readawrite.com/a/cd57c4e39b2117b6e220cfef9a407a4b?r=my_page",
    },
    {
      id: 6,
      title: "กาชาปองแห่งความลับ",
      genre: "แฟนตาซี / ระทึกขวัญ / ลึกลับ",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่6",
      synopsis: "เรื่องย่อสั้นๆ ของเรื่องที่หก...",
      status: "กำลังเขียน",
      link: "https://www.readawrite.com/a/9b71018e1361403fa6dfdde9f9f0521c?r=my_page",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-12 px-4 sm:px-6 md:px-12">
      {/* Header เรียบๆ มีแค่ชื่อ LOGO ตรงกลาง */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-black tracking-wider text-white mb-3">
          STAYING<span className="text-indigo-500">+</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          รวมผลงานเขียนนิยายและบทละคร
        </p>
      </header>

      {/* Main Grid แสดงผลงานเรียงต่อกันทั้งหมด */}
      <main className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* รูปปกนิยาย */}
                <div className="w-full aspect-[3/4] bg-slate-700 relative overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x400/1e293b/94a3b8?text=No+Cover";
                    }}
                  />
                </div>

                {/* เนื้อหาการ์ด */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                      {item.genre}
                    </span>

                    {/* ป้ายสถานะ */}
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        item.status === "กำลังเขียน"
                          ? "bg-yellow-900/40 text-yellow-300 border-yellow-700/50"
                          : "bg-red-900/40 text-red-300 border-red-700/50"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.synopsis}
                  </p>
                </div>
              </div>

              {/* ปุ่มลิงก์อ่านต่อ */}
              <div className="p-5 pt-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-center w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors shadow-md"
                >
                  อ่านต่อบน readAwrite
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
