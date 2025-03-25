import fs from 'fs';
import { faker } from '@faker-js/faker';

const generateUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push({
        id: i + 1,
        name: faker.person.firstName(),
        department: 'department',
        company: 'company',
        jobTitle: 'jobTitle',
    });
  }
  return users;
};

const users = generateUsers(1000000);

fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');

console.log('Данные пользователей успешно сгенерированы и сохранены в users.json');