import { SVGProps } from 'react'

import { config } from '@shared'

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
      href: config.vkGroupLink,
    },
    [SocialNames.Tg]: {
      Comp: Tg,
      href: config.tgChanelLink,
    },
    [SocialNames.Ig]: {
      Comp: Ig,
      href: config.igLink,
    },
    [SocialNames.Wa]: {
      Comp: Wa,
      href: config.waChatLink,
    },
  }
  const { Comp, href } = map[type]

  return (
    <a href={href}>
      <Comp {...rest} />
    </a>
  )
}
