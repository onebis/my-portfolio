import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/app/_components/ui/navigation-menu'

const list = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Works',
    link: '/works',
  },
]

export function Header() {
  return (
    <div className='flex w-full justify-center'>
      <NavigationMenu>
        <NavigationMenuList>
          {list.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
