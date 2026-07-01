import { Sparkles, BatteryFull, Droplets } from 'lucide-react'
import { trackCtaClick } from '../utils/tracking'

const badges = [
  { icon: Sparkles, label: 'AI Health Tracking' },
  { icon: BatteryFull, label: 'Pin 10 ngày' },
  { icon: Droplets, label: 'Chống nước IP68' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50/30" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 text-teal-700 text-xs font-semibold mb-6 border border-teal-200/60">
              <Sparkles size={14} />
              Công nghệ AI thế hệ mới
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">AI</span>{' '}
              Band
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700">
              Vòng tay thông minh theo dõi sức khỏe bằng AI
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Hiểu cơ thể bạn tốt hơn mỗi ngày với công nghệ AI Health Tracking. Theo dõi nhịp tim, giấc ngủ và vận động – tất cả trong một thiết bị nhỏ gọn trên cổ tay.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                onClick={() => trackCtaClick('hero')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5"
              >
                Khám phá tính năng
              </a>
              <a
                href="#specs"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-teal-300 hover:text-teal-600 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                Xem thông số
              </a>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 border border-slate-200/60 shadow-sm text-sm text-slate-600"
                >
                  <badge.icon size={16} className="text-teal-500" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Product Mockup - CSS only smartband */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl scale-110" />

              {/* Watch body */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80">
                {/* Top band */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-2xl" />

                {/* Watch case */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl shadow-slate-900/50 border border-slate-700/50 flex items-center justify-center p-3">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[1.4rem] bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-700/30 flex flex-col items-center justify-center gap-2 p-4 overflow-hidden">
                    {/* Screen content */}
                    <div className="text-[10px] text-slate-500 font-medium">PulseAI Band</div>
                    <div className="text-3xl sm:text-4xl font-bold text-white">72</div>
                    <div className="text-xs text-teal-400 font-medium">BPM</div>

                    {/* Heart animation line */}
                    <svg viewBox="0 0 120 30" className="w-full mt-1 opacity-80">
                      <polyline
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,15 20,15 25,15 30,5 35,25 40,10 45,20 50,15 70,15 75,15 80,5 85,25 90,10 95,20 100,15 120,15"
                      />
                    </svg>

                    {/* Bottom stats */}
                    <div className="flex gap-4 mt-1">
                      <div className="text-center">
                        <div className="text-[10px] text-cyan-400 font-semibold">SpO2</div>
                        <div className="text-xs text-white font-bold">98%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-violet-400 font-semibold">Sleep</div>
                        <div className="text-xs text-white font-bold">86</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side button */}
                <div className="absolute top-20 -right-0.5 sm:top-24 w-1.5 h-8 bg-gradient-to-b from-slate-600 to-slate-700 rounded-r-sm" />

                {/* Bottom band */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-slate-300 to-slate-400 rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
