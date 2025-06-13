import type { ReactElement } from 'react'
import { Popover } from '@radix-ui/themes'

export function PopoverContent({
  className,
  ...props
}: Popover.ContentProps): ReactElement {
  return (
    <Popover.Content
      className={['dark', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}
