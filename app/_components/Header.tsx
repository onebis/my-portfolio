'use client'
import { Container, Group, Burger, Box, NavLink, Stack, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/public/images/logo.png'

const links = [
  { link: '/about', label: 'About' },
  { link: '/works', label: 'Works' },
  { link: '/blog', label: 'Blog' },
]

export function Header() {
  const pathname = usePathname()
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <header className='h-20 w-full p-3'>
      <Box>
        <Container size='md' className='fixed flex w-full items-center justify-between'>
          <Image src={Logo} alt='logo' />
          <Group gap={5} visibleFrom='xs' fz='md'>
            {links.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.link}
                bg={pathname == link.link ? 'cyan.4' : ''}
                // className={clsx('p-3', { 'bg-sky-300': pathname == link.link })}
              >
                {link.label}
              </Button>
              // <Link
              //   key={link.label}
              //   href={link.link}
              //   className={clsx('p-3', { 'bg-sky-300': pathname == link.link })}
              // >
              //   {link.label}
              // </Link>
            ))}
          </Group>
          <div>en</div>
          <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
        </Container>
      </Box>
    </header>
  )
}
