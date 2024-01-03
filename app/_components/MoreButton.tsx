import { Button } from '@nextui-org/react'

export function MoreButton() {
  return (
    <Button
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
