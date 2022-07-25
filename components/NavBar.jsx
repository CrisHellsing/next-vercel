
import { ActiveLink } from './ActiveLink'
import styles from './NavBar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const content = menuItems;


export const NavBar = () => {
  return (
    <nav className={styles.menuBar}>

        {/* <ActiveLink text="Home" href="/"/>
        <ActiveLink text="About" href="/about"/>
        <ActiveLink text="Contact" href="/contact"/>
        <ActiveLink text="Pricing" href="/pricing"/> */}

        <div>
          {content.map((item) =>
            <ActiveLink key={item.href}
                        text={item.text}
                        href={item.href} 
            />
          )}
        </div>

    </nav>
  )
}
