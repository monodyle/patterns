import type { ReactElement } from 'react'
import { HoverCard } from '@radix-ui/themes'

export function HoverCardContent({
  className,
  ...props
}: HoverCard.ContentProps): ReactElement {
  return (
    <HoverCard.Content className={['dark', className].filter(Boolean).join(' ')} {...props} />
  )
}
