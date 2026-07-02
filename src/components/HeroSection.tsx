import { motion } from 'framer-motion'
import { trackCtaClick } from '../utils/tracking'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'
import PremiumProductVisual from './PremiumProductVisual'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 bg-white dark:bg-slate-950">
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow behind text */}
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.12),transparent_50%)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 dark:opacity-70 opacity-100" />
        
        {/* Glow behind product */}
        <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_50%)] rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 dark:opacity-70 opacity-100" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-60 dark:opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content (7 columns on desktop) */}
          <motion.div
            className="text-center lg:text-left lg:col-span-6 xl:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="mb-6 inline-block">
              <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                PulseAI Band
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp} 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Hiểu cơ thể bạn <br />
              <span className="text-slate-400 dark:text-slate-500 font-bold">trước khi cơ thể lên tiếng.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Vòng tay thông minh theo dõi nhịp tim, giấc ngủ, vận động và đưa ra gợi ý sức khỏe cá nhân hóa bằng thuật toán AI tiên tiến.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                onClick={() => trackCtaClick('hero_explore')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-xl shadow-slate-900/20 dark:shadow-white/10 transition-all hover:scale-105"
              >
                Khám phá sản phẩm
                <ArrowRight size={18} />
              </a>
              <a
                href="#newsletter"
                onClick={() => trackCtaClick('hero_newsletter')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Đăng ký nhận tin
              </a>
            </motion.div>
          </motion.div>

          {/* Product Mockup (6 columns on desktop) */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <PremiumProductVisual />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
