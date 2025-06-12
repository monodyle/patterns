import { ExampleBox } from '@/example/box'
import { ExampleOverlaySelect } from '@/example/overlay'
import { Story } from '@/utils/story'

export function InverseOverlayStory() {
  const canvas = (
    <ExampleBox maxWidth="240px">
      <ExampleOverlaySelect />
    </ExampleBox>
  )

  const hint = `
Switch to Light appearance to see the differences better.
`

  const desc = `
**Use a dark overlay to create a distinct contrast with 
the light background**. Overlays are commonly used to draw 
attention to specific elements or to provide a focused 
experience for the user. This pattern isolate the contrast 
between the main theme and the overlay to achieve this effect.

To maintain a calm and consistent experience, avoid using 
a light overlay that would invert the theme. Instead, 
consider using a darker overlay or no overlay at all, 
depending on the design requirements.
`

  return (
    <Story
      title="Inverse Overlay"
      canvas={canvas}
      hint={hint}
      desc={desc}
    />
  )
}
