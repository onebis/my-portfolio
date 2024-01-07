'use client'
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ThemeSwitcher } from '@/app/_components/ThemeSwitcher'
import { GithubIcon } from '@/public/icons/github'

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
    label: 'Products',
    href: '/products',
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

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='h-20 font-potta_one' maxWidth='full'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/'>
            <p className='font-bold text-inherit'>ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=' hidden gap-7 sm:flex' justify='center'>
        {items.map((item) => {
          return (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'text-black hover:text-amber-400 dark:text-white dark:hover:text-amber-300',
                  {
                    'text-amber-400 dark:text-amber-300': pathname.startsWith(item.href),
                  },
                )}
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        })}
        <NavbarItem>
          <Link
            href='https://github.com/onebis/my-portfolio'
            color='foreground'
            className='flex items-center hover:text-amber-400 dark:hover:text-amber-300'
          >
            <GithubIcon className='mr-[2px]' /> github
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='gap-3'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {/*<NavbarItem>*/}
        {/*  <Button as={Link} href='#' variant='flat' size='sm' isIconOnly>*/}
        {/*    en*/}
        {/*  </Button>*/}
        {/*</NavbarItem>*/}
      </NavbarContent>

      {/*<NavbarMenu>*/}
      {/*  {menuItems.map((item, index) => (*/}
      {/*    <NavbarMenuItem key={`${item}-${index}`}>*/}
      {/*      <Link*/}
      {/*        color={*/}
      {/*          index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'*/}
      {/*        }*/}
      {/*        className='w-full'*/}
      {/*        href='#'*/}
      {/*        size='lg'*/}
      {/*      >*/}
      {/*        {item}*/}
      {/*      </Link>*/}
      {/*    </NavbarMenuItem>*/}
      {/*  ))}*/}
      {/*</NavbarMenu>*/}
    </Navbar>
  )
}
