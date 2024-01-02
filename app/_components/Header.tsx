'use client'
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { wrap } from 'framer-motion'
import React from 'react'
import { ThemeSwitcher } from '@/app/_components/ThemeSwitcher'
import { GithubIcon } from '@/public/icons/github'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const items = [
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Works',
      href: '/works',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ]
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='font-potta_one'
      // classNames={{ wrapper: 'full' }}
      maxWidth='full'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=' hidden gap-7 sm:flex' justify='center'>
        {items.map((item) => {
          return (
            <NavbarItem key={item.href}>
              <Link href={item.href} className='text-gray-600 hover:text-amber-300 dark:text-white'>
                {item.label}
              </Link>
            </NavbarItem>
          )
        })}
        <NavbarItem>
          <Link
            isExternal
            isBlock
            showAnchorIcon
            href='https://github.com/onebis/my-portfolio'
            color='foreground'
            className='hover:text-amber-300'
          >
            <GithubIcon className='mr-[2px]' /> github
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='gap-3'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href='#' variant='flat' size='sm' isIconOnly>
            en
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
