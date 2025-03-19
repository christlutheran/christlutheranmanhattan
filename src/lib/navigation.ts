export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
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
    ]
  },
  {
    title: 'Resources',
    path: '/resources/',
    children: [
      { title: 'Luther\'s Small Catechism', path: '/catechism/' },
      { title: 'Lutheran Resources', path: '/resources/' }
    ]
  },
  { title: 'Contact', path: '/contact/' }
];