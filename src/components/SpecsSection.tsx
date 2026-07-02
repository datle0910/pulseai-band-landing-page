import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { useSectionTracking } from '../hooks/useSectionTracking'
import { ShieldCheck, Cpu, Feather, Smartphone, Heart, Sparkles } from 'lucide-react'

export default function SpecsSection() {
  const sectionRef = useSectionTracking(
    'specs',
    'Bạn đang xem thông số kỹ thuật của PulseAI Band.'
  )

  const topMetrics = [
    { value: '10 ngày', label: 'Thời lượng Pin', desc: 'Dùng liên tục không ngắt quãng' },
    { value: 'IP68', label: 'Chống nước', desc: 'An toàn đi bơi, đi mưa và bụi' },
    { value: '1.8" AMOLED', label: 'Màn hình màu', desc: 'Tấm nền rực rỡ, độ tương phản cao' },
    { value: 'Bluetooth 5.3', label: 'Kết nối ổn định', desc: 'Đồng bộ dữ liệu tức thời' },
  ]

  const detailedSpecs = [
    {
      icon: Heart,
      label: 'Hệ thống Cảm biến',
      value: 'Cảm biến nhịp tim quang học thế hệ mới, Cảm biến Oxy trong máu (SpO2), Cảm biến gia tốc 3 trục để theo dõi vận động chính xác.',
    },
    {
      icon: Sparkles,
      label: 'AI Insight',
      value: 'Thuật toán học máy phân tích HRV và chu kỳ ngủ sâu để đề xuất thói quen phục hồi cá nhân hóa hằng ngày.',
    },
    {
      icon: Feather,
      label: 'Trọng lượng siêu nhẹ',
      value: 'Chỉ 38g bao gồm cả dây đeo. Thiết kế tối ưu hóa công thái học để đeo thoải mái 24/7 khi ngủ và tập luyện.',
    },
    {
      icon: Smartphone,
      label: 'Tương thích thiết bị',
      value: 'Hỗ trợ đồng bộ mượt mà với cả thiết bị chạy iOS 14.0 trở lên và Android 8.0 trở lên qua ứng dụng PulseAI.',
    },
    {
      icon: ShieldCheck,
      label: 'Chế độ Bảo hành',
      value: 'Bảo hành chính hãng 1 đổi 1 trong vòng 12 tháng (đối với bản Lite và Pro) và 18 tháng (đối với bản Elite).',
    },
    {
      icon: Cpu,
      label: 'Vật liệu chế tác',
      value: 'Thân máy hợp kim Graphite/Titan cao cấp bo cong vát cạnh, dây đeo silicone chống kích ứng hoặc dây dệt Hybrid.',
    },
  ]

  return (
    <section id="specs" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-slate-50 dark:from-slate-900/30 dark:to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Thông số kỹ thuật{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              đẳng cấp.
            </span>
          </h2>
        </motion.div>

        {/* Top Row Large Metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {topMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-bold text-teal-600 dark:text-teal-400 mt-2">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Specs Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {detailedSpecs.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative bg-white dark:bg-slate-900/40 border border-slate-200/45 dark:border-slate-800/50 rounded-3xl p-6 flex flex-col hover:border-teal-200/60 dark:hover:border-teal-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-teal-500 mb-5 border border-teal-100/50 dark:border-teal-900/20">
                <item.icon size={20} />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
