import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved !== 'light'
      return true
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}
