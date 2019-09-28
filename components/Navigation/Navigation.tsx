import Link from 'next/link'
import React from 'react'
import { style } from 'typestyle'
import { ABOUT, ANNOUNCEMENT, HOME } from '../../constants/routes'

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
  textAlign: 'center',
  $nest: {
    ul: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& > ul': {
      padding: '4px 32px',
    },
    li: {
      display: 'flex',
      padding: '6px 8px',
    },
    a: {
      color: '#067df7',
      textDecoration: 'none',
      fontSize: '13px',
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
