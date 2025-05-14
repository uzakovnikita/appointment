import { NavTabs } from '@shared'

export default function Home() {
  return (
    <NavTabs
      tabs={[
        {
          href: '/bike_bucket',
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
