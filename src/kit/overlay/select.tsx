import type { ReactElement } from 'react'
import { Select } from '@radix-ui/themes'

export function SelectContent({
  className,
  ...props
}: Select.ContentProps): ReactElement {
  return (
    <Select.Content
      className={['dark', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}
