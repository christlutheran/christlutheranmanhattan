import { churchConfig } from '../config/church';

export function getFormattedAddress(): string {
  return churchConfig.address.full;
}

export function getServiceSchedule(): string {
  return `Divine Service: Sunday ${churchConfig.services.sunday.divine}\n` +
         `Bible Study & Sunday School: ${churchConfig.services.sunday.bibleStudy}`;
}

export function getOfficeHours(): string {
  return `Monday-Friday: ${churchConfig.officeHours.weekday}\n` +
         `Saturday: ${churchConfig.officeHours.saturday}\n` +
         `Sunday: ${churchConfig.officeHours.sunday}`;
}

export function getPastorInfo(): {name: string, email: string, phone: string} {
  return {
    name: churchConfig.pastor.name,
    email: churchConfig.pastor.email,
    phone: churchConfig.pastor.phone
  };
}