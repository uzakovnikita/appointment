import { SVGProps } from 'react'

import { Ig } from './icons/Ig'
import { Tg } from './icons/Tg'
import { Vk } from './icons/Vk'
import { Wa } from './icons/Wa'

export enum SocialNames {
  Vk = 'Vk',
  Ig = 'Ig',
  Tg = 'Tg',
  Wa = 'Wa',
}

export const SocialLink = ({
  type,
  ...rest
}: SVGProps<SVGSVGElement> & { type: SocialNames }) => {
  const map = {
    [SocialNames.Vk]: {
      Comp: Vk,
      href: 'https://vk.com',
    },
    [SocialNames.Tg]: {
      Comp: Tg,
      href: 'https://t.me',
    },
    [SocialNames.Ig]: {
      Comp: Ig,
      href: 'https://instagram.com',
    },
    [SocialNames.Wa]: {
      Comp: Wa,
      href: 'https://whatsapp.com',
    },
  }
  const { Comp, href } = map[type]

  return (
    <a href={href}>
      <Comp {...rest} />
    </a>
  )
}
