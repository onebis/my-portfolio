import { Button, Link } from '@nextui-org/react'

export function MoreButton({ href }: { href?: string }) {
  return (
    <Link href={href}>
      <Button
        isIconOnly
        variant='flat'
        radius={'none'}
        disableRipple
        className='h-8 border-b-1 border-amber-400 bg-transparent'
      >
        more
      </Button>
    </Link>
  )
}
