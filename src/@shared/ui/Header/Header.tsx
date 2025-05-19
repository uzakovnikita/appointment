import { NavItem } from '../NavItem'

export const Header = () => {
  return (
    <header className="bg-surface-container-low text-on-surface rounded-md p-2">
      <h1 className="flex justify-start text-xl">
        <span className="text-on-surface-variant font-branding font-bold">
          Enduro&nbsp;18
        </span>
      </h1>
      <nav className="mt-4 flex flex-wrap gap-2">
        <NavItem text="Главная" href="/" />
        <NavItem text="Время" href="/time_booking" />
        <NavItem text="Байки" href="/bike_bucket" />
        <NavItem text="Контакты" href="#contacts" />
      </nav>
    </header>
  )
}
