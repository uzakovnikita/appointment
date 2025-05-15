const commonConfig = {
  vkGroupLink: 'https://vk.com/enduro18izhevsk',
  waChatLink: 'https://whatsapp.com',
  tgChanelLink: 'https://t.me/enduro18rus',
  igLink: 'https://instagram.com',
}

const devConfig = () => {}

const prodConfig = () => {}

export const config =
  process.env.NODE_ENV === 'production'
    ? {
        ...commonConfig,
        ...prodConfig,
      }
    : {
        ...commonConfig,
        ...devConfig,
      }
