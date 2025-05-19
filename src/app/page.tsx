import { NavTabs } from '@shared'

export default function Home() {
  return (
    <NavTabs
      tabs={[
        {
          href: '/select_bike',
          text: 'Выбрать байк',
        },
        {
          href: '/time_booking',
          text: 'Выбрать время',
        },
      ]}
    />
  )
}
