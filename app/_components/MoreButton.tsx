import { Button, Link } from '@nextui-org/react'
// import Link from 'next/link'
export function MoreButton({ href = '' }: { href?: string }) {
  return (
    <Button
      as={Link}
      href={href}
      isIconOnly
      variant='flat'
      radius={'none'}
      disableRipple
      className='h-8 border-b-1 border-amber-400 bg-transparent'
    >
      more
    </Button>
  )
}
