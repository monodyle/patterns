import { FieldBlock } from '@/kit/field/block'
import { HoverCardContent } from '@/kit/overlay/hover-card'
import { SelectContent } from '@/kit/overlay/select'
import { Avatar, Box, Flex, Heading, HoverCard, Link, Select, Text } from '@radix-ui/themes'

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

const persons = [{
  name: 'Thien Do',
  id: 'thien-do',
  avatar: 'https://github.com/thien-do.png',
}, {
  name: 'Monody Le',
  id: 'monodyle',
  avatar: 'https://github.com/monodyle.png',
}]

export function ExampleOverlayHoverCard() {
  return (
    <Flex gap="2">
      {persons.map(({ name, id, avatar }) => (
        <HoverCard.Root key={id}>
          <HoverCard.Trigger>
            <Avatar
              size="3"
              fallback={name.charAt(0)}
              radius="full"
              src={avatar}
            />
          </HoverCard.Trigger>
          <HoverCardContent maxWidth="300px">
            <Flex gap="4">
              <Avatar
                size="3"
                fallback={name.charAt(0)}
                radius="full"
                src={avatar}
              />
              <Box>
                <Heading size="3" as="h3">
                  {name}
                </Heading>
                <Text as="div" size="2" color="gray">
                  {id}
                </Text>
              </Box>
            </Flex>
          </HoverCardContent>
        </HoverCard.Root>
      ))}
    </Flex>
  )
}
