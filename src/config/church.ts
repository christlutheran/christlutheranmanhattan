// Church Information Configuration
export const churchConfig = {
  name: 'Christ Lutheran Church',
  address: {
    street: '4592 Green Valley Rd',
    city: 'Manhattan',
    state: 'KS',
    zip: '66502',
    full: '4592 Green Valley Rd, Manhattan, KS 66502'
  },
  contact: {
    phone: '(785) 776-2227',
    email: 'christlutheran.mhk@gmail.com'
  },
  pastor: {
    name: 'James Woelmer',
    email: 'jwoelmer@verizon.net',
    phone: '(972) 704-6722'
  },
  services: {
    sunday: {
      divine: '10:30 AM',
      bibleStudy: '9:30 AM',
      sundaySchool: '9:30 AM'
    }
  },
  officeHours: {
    weekday: '9:00 AM - 3:00 PM',
    saturday: 'Closed',
    sunday: '8:00 AM - 12:00 PM'
  }
} as const;