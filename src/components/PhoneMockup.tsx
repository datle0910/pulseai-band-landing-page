import { Activity, Heart, Moon, BrainCircuit, Bell, Battery } from 'lucide-react'

export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto scale-95 sm:scale-100">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full" />
      
      {/* Phone Frame (CSS only) */}
      <div className="relative w-full aspect-[1/2.1] rounded-[3rem] bg-slate-200 dark:bg-slate-800 p-[3px] shadow-2xl shadow-slate-900/30 dark:shadow-black/50 border border-slate-300 dark:border-slate-700">
        
        {/* Inner Screen Bezel */}
        <div className="relative w-full h-full rounded-[2.8rem] bg-black p-2 sm:p-2.5 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] flex flex-col">
          
          {/* Top Notch (Dynamic Island style) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-between px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] border border-white/5" />
          </div>

          {/* Screen Content */}
          <div className="relative flex-1 rounded-[2.2rem] bg-slate-50 dark:bg-slate-950 overflow-hidden flex flex-col pt-12 pb-6">
            
            {/* Status Bar Mock */}
            <div className="absolute top-0 inset-x-0 h-12 flex justify-between items-center px-6 z-20">
              <span className="text-xs font-bold text-slate-900 dark:text-white">9:41</span>
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-white">
                <Activity size={12} />
                <Battery size={14} className="fill-current opacity-80" />
              </div>
            </div>

            {/* App UI Header */}
            <div className="px-6 mb-6 flex justify-between items-center mt-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Hôm nay</h3>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Tổng quan</h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm">
                <Bell size={18} className="text-slate-600 dark:text-slate-300" />
              </div>
            </div>

            {/* Activity Rings (Hero) */}
            <div className="px-6 mb-6 flex justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-xl">
                  {/* Outer Ring */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-teal-500/20" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#14b8a6" strokeWidth="8" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" />
                  
                  {/* Middle Ring */}
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" className="text-cyan-500/20" strokeWidth="8" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="188" strokeDashoffset="40" strokeLinecap="round" />
                  
                  {/* Inner Ring */}
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" className="text-violet-500/20" strokeWidth="8" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="125" strokeDashoffset="20" strokeLinecap="round" />
                </svg>
                <div className="absolute text-center flex flex-col items-center">
                  <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Năng lượng</span>
                  <span className="block text-2xl font-black text-slate-900 dark:text-white leading-none">846</span>
                  <span className="block text-[10px] text-slate-400 font-bold mt-0.5">kcal</span>
                </div>
              </div>
            </div>

            {/* Widget Grid */}
            <div className="flex-1 px-4 grid grid-cols-2 gap-3 pb-4 overflow-hidden">
              
              {/* Heart Rate Widget */}
              <div className="col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center">
                    <Heart size={12} className="text-rose-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">Nhịp tim</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">72</span>
                    <span className="text-[10px] text-slate-400 font-bold mb-0.5">bpm</span>
                  </div>
                  <svg viewBox="0 0 100 20" className="w-full mt-2">
                    <path d="M0,10 Q10,10 15,10 T25,2 T30,18 T35,10 T50,10 T60,5 T65,10 T100,10" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Sleep Widget */}
              <div className="col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                    <Moon size={12} className="text-indigo-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">Giấc ngủ</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">7h</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">24m</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden flex">
                    <div className="h-full bg-indigo-500 w-1/4 rounded-full" />
                    <div className="h-full bg-indigo-300 w-1/2 rounded-full" />
                    <div className="h-full bg-indigo-400 w-1/4 rounded-full" />
                  </div>
                </div>
              </div>

              {/* AI Insight Full Widget */}
              <div className="col-span-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-4 text-white shadow-lg shadow-teal-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BrainCircuit size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-wider">AI Insight</span>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Live</span>
                </div>
                <p className="text-xs font-medium text-white/95 leading-relaxed line-clamp-2">
                  Nhịp tim nghỉ giảm 2bpm. Sẵn sàng cho buổi tập nhẹ!
                </p>
              </div>

            </div>

            {/* Bottom App Nav */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex justify-between items-center px-8 z-20 pb-2">
              <div className="flex flex-col items-center text-teal-500">
                <Activity size={20} />
                <span className="text-[9px] font-bold mt-1">Today</span>
              </div>
              <div className="flex flex-col items-center text-slate-400">
                <BrainCircuit size={20} />
                <span className="text-[9px] font-bold mt-1">AI Coach</span>
              </div>
              <div className="flex flex-col items-center text-slate-400">
                <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-[9px] font-bold mt-1">Profile</span>
              </div>
            </div>

          </div>

          {/* Screen Glass Reflection */}
          <div className="absolute top-0 right-0 w-[120%] h-1/3 bg-gradient-to-b from-white/10 to-transparent rotate-12 translate-x-10 -translate-y-10 pointer-events-none" />

        </div>

        {/* Side Buttons (Volume & Power) */}
        <div className="absolute top-28 -left-1 w-1 h-12 bg-slate-400 dark:bg-slate-600 rounded-l-sm" />
        <div className="absolute top-44 -left-1 w-1 h-12 bg-slate-400 dark:bg-slate-600 rounded-l-sm" />
        <div className="absolute top-36 -right-1 w-1 h-16 bg-slate-400 dark:bg-slate-600 rounded-r-sm" />
      </div>
    </div>
  )
}
