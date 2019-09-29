import Link from 'next/link'
import React from 'react'
import { style } from 'typestyle'
import { rem } from 'csx'
import { ABOUT, ANNOUNCEMENT, HOME } from '../../constants/routes'
import { colors } from '../../constants/colors'

const routes = [
  {
    href: HOME,
    label: 'Home',
  },
  {
    href: ANNOUNCEMENT,
    label: 'Announcement',
  },
  {
    href: ABOUT,
    label: 'About',
  },
]

const className = style({
  backgroundColor: colors.dark.toHexString(),
  padding: `${rem(0.5)} 0`,
  textAlign: 'center',
  $nest: {
    ul: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0,
    },
    '& > ul': {
      padding: `${rem(0.5)} ${rem(2)}`,
    },
    li: {
      display: 'flex',
      padding: `${rem(0.25)} ${rem(0.25)}`,
    },
    a: {
      color: colors.light.toHexString(),
      textDecoration: 'none',
      fontSize: `${rem(1)}`,
    },
    'a:hover': {
      color: colors.primary.toHexString(),
    },
  },
})

export class Navigation extends React.PureComponent {
  render() {
    return (
      <nav className={className}>
        <ul>
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
