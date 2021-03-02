import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.honeyswap.org/#/swap',
      }
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/tulip',
  }
]

export default config
