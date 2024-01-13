import { SVGProps } from 'react'

export function MobileApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='5em' height='5em' viewBox='0 0 24 24' {...props}>
      <path d='M6 23q-.825 0-1.412-.587T4 21V3q0-.825.588-1.412T6 1h10q.825 0 1.413.588T18 3v4h-2V6H6v12h10v-1h2v4q0 .825-.587 1.413T16 23zm8.95-7l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4z'></path>
    </svg>
  )
}
