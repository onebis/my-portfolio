'use client'

import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon } from '@/public/icons/moon'
import { Sun } from '@/public/icons/sun'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      disableRipple
      className='dark:bg-amber-400'
      color='secondary'
      isIconOnly
      size={'sm'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun /> : <Moon className='fill-amber-50' />}
    </Button>
  )
}
