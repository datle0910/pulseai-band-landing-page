import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BrainCircuit, BatteryFull, Droplets } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'AI Health Insight',
    description: 'Thuật toán học máy phân tích dữ liệu sinh trắc học theo thời gian thực.',
  },
  {
    icon: BatteryFull,
    title: 'Pin 10 Ngày',
    description: 'Một lần sạc, theo dõi liên tục ngày đêm không gián đoạn.',
  },
  {
    icon: Droplets,
    title: 'Chống Nước IP68',
    description: 'Thoải mái bơi lội, tắm rửa mà không cần tháo vòng tay.',
  },
]

export default function ProductRevealSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax effect for the background text
  const yBg = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Huge Background Text */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none"
      >
        <span className="text-[15vw] font-black text-slate-900 dark:text-white whitespace-nowrap">
          PULSE AI
        </span>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Product Image / Mockup Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={viewportConfig}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-8">
              {/* Soft spotlight */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_70%)]" />
              
              {/* Product Representation (Simplified for Reveal) */}
              <div className="relative w-48 h-80 sm:w-56 sm:h-[22rem] rotate-12 hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Straps */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-20 bg-slate-800 dark:bg-slate-800 rounded-t-3xl shadow-[inset_0_4px_8px_rgba(255,255,255,0.05)]" />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-28 h-20 bg-slate-800 dark:bg-slate-800 rounded-b-3xl shadow-[inset_0_-4px_8px_rgba(255,255,255,0.05)]" />
                
                {/* Core Unit */}
                <div className="relative w-full h-full rounded-[2.5rem] bg-slate-900 p-[2px] shadow-2xl">
                  <div className="relative w-full h-full rounded-[2.4rem] bg-black p-3 shadow-inner overflow-hidden">
                    {/* Screen glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 opacity-50" />
                    <div className="w-full h-full rounded-[1.8rem] bg-slate-950 flex flex-col items-center justify-center border border-white/5 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-4">
                        <BrainCircuit className="w-8 h-8 text-teal-400" />
                      </div>
                      <div className="text-white text-xl font-bold tracking-widest">PULSE</div>
                    </div>
                    {/* Glass reflection */}
                    <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rotate-12 translate-x-4 -translate-y-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy & Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
              Sức mạnh công nghệ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                trên cổ tay bạn.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-lg">
              Được thiết kế tinh xảo từ nhôm nguyên khối, PulseAI Band không chỉ là thiết bị theo dõi, mà là trợ lý sức khỏe cá nhân của bạn.
            </motion.p>

            <div className="space-y-8">
              {highlights.map((item, index) => (
                <motion.div key={index} variants={fadeUp} className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-slate-900 border border-teal-100 dark:border-slate-800 flex items-center justify-center shadow-sm">
                      <item.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
