import { NavItem } from '../NavItem'

export const Header = () => {
  return (
    <header className="bg-surface-container-high text-on-surface rounded-md p-2">
      <h1 className="flex justify-end text-xl">
        <span className="text-on-surface-variant font-primary font-bold">
          Enduro&nbsp;18
        </span>
      </h1>
      <nav className="mt-4 flex flex-wrap gap-2">
        <NavItem text="На главную" href="/" />
        <NavItem text="Выбрать время" href="/time_booking" />
        <NavItem text="Выбрать байк" href="/bike_bucket" />
      </nav>
    </header>
  )
}
