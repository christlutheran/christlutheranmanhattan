---
export interface NavItem {
  title: string;
  path: string;
}

export const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Beliefs', path: '/beliefs' },
  { title: 'Divine Service', path: '/divine-service' },
  { title: 'Our Pastor', path: '/our-pastor' },
  { title: 'News', path: '/news' },
  { title: 'Contact', path: '/contact' }
];