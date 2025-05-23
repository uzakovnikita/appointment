import { SocialLink, SocialNames } from '../Socials'

export const Footer = () => {
  const socials = Object.keys(SocialNames)

  return (
    <footer
      className="bg-surface-container-low text-on-surface rounded-m flex flex-col justify-center p-4"
      id="contacts"
    >
      <ul className="mt-2 flex justify-center text-sm">
        {socials.map((type, idx) => (
          <li key={idx} className="not-first:ml-2">
            <SocialLink type={type as SocialNames} width={32} height={32} />
          </li>
        ))}
      </ul>
      <a className="mt-2 text-center" href="tel:666">
        +7 (912) 743-17-87
      </a>
      <span className="mt-6 text-center text-sm">Ижевск, 2025</span>
    </footer>
  )
}
