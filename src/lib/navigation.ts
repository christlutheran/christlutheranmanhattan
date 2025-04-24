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
    ]
  },
  { title: 'Resources', path: '/resources/' },
  { title: 'Giving', path: '/giving/' },
  { title: 'Contact', path: '/contact/' },
  { title: 'School', path: 'https://www.christclassicalmanhattan.org', target: '_blank' }
];