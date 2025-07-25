export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
  target?: string; // Optional property for specifying link target
}

export const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { 
    title: 'About', 
    path: '/about/',
    children: [
      { title: 'About Us', path: '/about/' },
      { title: 'Beliefs', path: '/beliefs/' },
      { title: 'Divine Service', path: '/divine-service/' },
      { title: 'Our Pastor', path: '/our-pastor/' },
      { title: 'Service Times', path: '/service-times/' },
      { title: 'Calendar', path: '/calendar/' },
      { title: 'Vacation Bible School', path: '/vacation-bible-school/' },
    ]
  },
  { 
    title: 'Resources', 
    path: '/resources/',
    children: [
      { title: 'Sermons', path: '/sermons/' },
      { title: 'Papers', path: '/papers/' },
      { title: 'Other Resources', path: '/resources/' },
      { title: 'Lectionary', path: 'https://lectionary.christlutheranmanhattan.org', target: '_blank' }
    ]
  },
  { title: 'Giving', path: '/giving/' },
  { title: 'Contact', path: '/contact/' },
  { title: 'School', path: 'https://www.christclassicalmanhattan.org', target: '_blank' }
];