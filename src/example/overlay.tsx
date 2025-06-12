import { FieldBlock } from '@/kit/field/block'
import { SelectContent } from '@/kit/overlay/select'
import { Select, Text } from '@radix-ui/themes'

const typefaces = [{
  value: 'ia',
  primary: 'iA Writer',
  secondary: 'by iA',
  website: 'https://ia.net/topics/a-typographic-christmas',
}, {
  value: 'lato',
  primary: 'Lato',
  secondary: 'by Łukasz Dziedzic',
  website: 'https://www.latofonts.com/team/',
}, {
  value: 'inter',
  primary: 'Inter',
  secondary: 'by Rasmus Andersson',
  website: 'https://rsms.me/inter/',
}, {
  value: 'system',
  primary: 'System',
  secondary: 'like your device',
  website: 'https://fonts.google.com/knowledge/glossary/system_font_web_safe_font',
}]

export function ExampleOverlaySelect() {
  return (
    <FieldBlock label="Typeface">
      <Select.Root defaultValue={typefaces[2].value}>
        <Select.Trigger />
        <SelectContent>
          {typefaces.map(({ value, primary, secondary }) => (
            <Select.Item key={value} value={value}>
              <Text weight="medium">
                {primary}
              </Text>
              <Text color="gray">
                ,
                {' '}
                {secondary}
              </Text>
            </Select.Item>
          ))}
        </SelectContent>
      </Select.Root>
    </FieldBlock>
  )
}
