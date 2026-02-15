import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SmokeyCursor() {
  const [smokes, setSmokes] = useState<any[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const id = Date.now();

      setSmokes((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY },
      ]);

      // remove smoke after animation
      setTimeout(() => {
        setSmokes((prev) => prev.filter((s) => s.id !== id));
      }, 800);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {smokes.map((smoke) => (
        <motion.div
          key={smoke.id}
          className="fixed pointer-events-none rounded-full bg-purple-400/30 blur-2xl"
          style={{
            top: smoke.y - 40,
            left: smoke.x - 40,
            width: 80,
            height: 80,
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.8 }}
        />
      ))}
    </>
  );
}
