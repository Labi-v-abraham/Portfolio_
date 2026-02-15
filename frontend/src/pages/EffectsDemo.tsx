import { motion } from "framer-motion";

export default function EffectsDemo() {
  return (
    <div className="min-h-screen p-10 space-y-20 bg-gray-100 dark:bg-gray-900">

      {/* 1. Fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10 bg-white dark:bg-gray-800 rounded-xl shadow"
      >
        Fade-in Section Preview
      </motion.div>

      {/* 2. Card Hover */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="p-10 bg-white dark:bg-gray-800 rounded-xl shadow w-64"
      >
        Hover Me
      </motion.div>

      {/* 3. Button Animation */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-purple-600 text-white rounded"
      >
        Hover Button
      </motion.button>

      {/* 4. Floating Effect */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="p-10 bg-white dark:bg-gray-800 rounded-xl shadow w-64"
      >
        Floating Element
      </motion.div>

      {/* 5. Image Zoom */}
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        src="https://picsum.photos/400"
        className="w-64 h-40 object-cover rounded-lg"
      />
    </div>
  );
}
