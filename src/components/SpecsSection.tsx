import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { useSectionTracking } from '../hooks/useSectionTracking'

export default function SpecsSection() {
  const sectionRef = useSectionTracking(
    'specs',
    'Bạn đang xem thông số kỹ thuật của PulseAI Band.'
  )

  const topMetrics = [
    { value: '10 Days', label: 'Battery Life', desc: 'Sử dụng liên tục không cần sạc' },
    { value: 'IP68', label: 'Waterproof', desc: 'An toàn đi bơi, đi mưa và bụi bẩn' },
    { value: '1.8"', label: 'AMOLED Screen', desc: 'Tấm nền rực rỡ, độ tương phản cao' },
    { value: 'v5.3', label: 'Bluetooth', desc: 'Đồng bộ dữ liệu thời gian thực' },
  ]

  const detailedSpecs = [
    {
      label: 'Hệ thống Cảm biến',
      value: 'Cảm biến nhịp tim quang học thế hệ mới, Cảm biến Oxy trong máu (SpO2), Cảm biến gia tốc 3 trục theo dõi vận động.',
    },
    {
      label: 'AI Insights Engine',
      value: 'Thuật toán học máy phân tích biến thiên nhịp tim (HRV) và chu kỳ giấc ngủ sâu để đề xuất phục hồi cá nhân hóa.',
    },
    {
      label: 'Trọng lượng thiết bị',
      value: 'Chỉ 38g bao gồm cả dây đeo. Thiết kế tối ưu công thái học đeo thoải mái 24/7 khi ngủ và hoạt động mạnh.',
    },
    {
      label: 'Tính tương thích',
      value: 'Hỗ trợ đồng bộ mượt mà với cả thiết bị chạy iOS 14.0 trở lên và Android 8.0 trở lên qua ứng dụng PulseAI.',
    },
    {
      label: 'Thời hạn bảo hành',
      value: 'Bảo hành chính hãng 1 đổi 1 trong vòng 12 tháng (đối với bản Lite và Pro) và 18 tháng (đối với bản Elite).',
    },
    {
      label: 'Vật liệu chế tác',
      value: 'Thân máy hợp kim Graphite/Titanium vát cạnh bo cong, dây đeo silicon cao cấp chống kích ứng hoặc dây dệt Hybrid.',
    },
  ]

  return (
    <section id="specs" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F7FA] dark:bg-[#020617] transition-colors duration-300">
      
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,169,157,0.02),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
            Thông số kỹ thuật{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4]">
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
              className="bg-white dark:bg-[#0B1220] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter font-tabular">
                {item.value}
              </div>
              <div className="text-xs font-black text-[#00A99D] dark:text-[#2DD4BF] mt-3 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Specs Grid (Minimalist, structured style) */}
        <motion.div
          className="max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {detailedSpecs.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="grid sm:grid-cols-3 gap-4 sm:gap-8 py-6 border-b border-slate-200 dark:border-slate-800 items-start hover:bg-slate-200/10 dark:hover:bg-slate-900/10 px-4 transition-colors"
            >
              <div className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest sm:col-span-1">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed sm:col-span-2">
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
