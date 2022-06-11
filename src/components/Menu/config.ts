import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://hilarious-manatee-26ef5a.netlify.app/'
  },
  {
    label: 'Purchase Your In Game Character',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Mermaid GAMING',
    icon: 'NftIcon',
    href: 'https://www.retrogames.cc/genesis-games/ecco-jr-usa-australia-march-1995.html',
    // href: 'https://www.retrogames.cc/gameboyadvance-games/disney-s-prinzessinnen-g-suxxors.html',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://hilarious-manatee-26ef5a.netlify.app/farms'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://hilarious-manatee-26ef5a.netlify.app/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
    ]
  },
  {
    label: 'Auditing after Launch',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Github',
    icon: 'RedditIcon',
    href: 'https://github.com/ArielRin?tab=repositories',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/SirenTrove_DEX',
  },
  {
    label: '#girlsmakingcrypto',
    icon: 'IfoIcon',
    href: 'https://twitter.com/search?q=%23girlsmakingcrypto&src=typed_query',
  },
]

export default config
