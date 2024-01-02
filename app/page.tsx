import { useMantineColorScheme, Button, Group, Stack } from '@mantine/core'
import { Header } from '@/app/_components/Header'

export default function Home() {
  // const { colorScheme, setColorScheme } = useMantineColorScheme()
  return (
    <Stack>
      <Header />
      {/*<Group>*/}
      {/*  <Button*/}
      {/*    color={colorScheme === 'dark' ? 'yellow' : ''}*/}
      {/*    variant='outline'*/}
      {/*    onClick={() => setColorScheme('dark')}*/}
      {/*  >*/}
      {/*    Dark*/}
      {/*  </Button>*/}
      {/*  <Button onClick={() => setColorScheme('light')}>Light</Button>*/}
      {/*</Group>*/}
    </Stack>
  )
}
