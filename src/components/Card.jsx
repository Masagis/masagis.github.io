import { motion } from 'framer-motion'

const cardVariant = (i = 0) => ({
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function Card({ children, className = '', delay = 0, hover = false, id }) {
  return (
    <motion.div
      {...cardVariant(delay)}
      id={id}
      className={`
        bg-bg-card rounded-2xl border border-border p-5
        transition-all duration-400 ease-smooth
        ${hover ? 'hover:bg-bg-hover hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
