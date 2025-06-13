import { ExampleBox } from '@/example/box'
import { ExampleOverlayHoverCard, ExampleOverlaySelect } from '@/example/overlay'
import { Story } from '@/utils/story'
import { Heading } from '@radix-ui/themes'

export function OverlayStory() {
  const select = (
    <ExampleBox maxWidth="240px">
      <ExampleOverlaySelect />
    </ExampleBox>
  )

  const hoverCard = (
    <ExampleBox maxWidth="240px">
      <Heading size="2" as="h4">Authors</Heading>
      <ExampleOverlayHoverCard />
    </ExampleBox>
  )

  const hint = `
Switch to Light appearance to see the differences better.
`

  const desc = `
**Use a dark overlay to create a distinct contrast with 
the light background**. Overlays like select, popover, 
and tooltip are commonly used to draw attention to 
specific elements or to provide a focused experience 
for the user. Use \`<SelectContent />\`, \`<HoverCardContent />\`, 
and \`<PopoverContent />\` to isolate the contrast between 
the main theme and the overlay.

In other hands, to maintain a calm and consistent 
experience, don't inverse the interfaces.
`

  return (
    <Story
      title="Overlay"
      canvas={[
        { node: select },
        { node: hoverCard },
      ]}
      hint={hint}
      desc={desc}
    />
  )
}
