import { faker } from '@faker-js/faker';
import moment from 'moment';
import _ from 'lodash';

describe('Cache Test with External Libraries', () => {
  it('Generates and logs fake data', () => {
    const name = faker.name.fullName();
    const email = faker.internet.email();
    const date = moment().format('MMMM Do YYYY');
    const reversedArray = _.reverse([1, 2, 3]);

    cy.log(`Generated name: ${name}`);
    cy.log(`Generated email: ${email}`);
    cy.log(`Current date: ${date}`);
    cy.log(`Reversed array: ${reversedArray.join(', ')}`);

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Date: ${date}`);
    console.log(`Reversed: ${reversedArray}`);
  });
});
