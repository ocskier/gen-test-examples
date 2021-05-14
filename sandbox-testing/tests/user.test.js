const { assert, expect } = require('chai');
const { beforeEach } = require('mocha');
const User = require('../user.js');

describe('user', () => {
  let testNum = 1;
  beforeEach(() => {
    console.log(`    Running test #${testNum++}`);
  });
  describe('firstName constructor', () => {
    it('will return first name property', () => {
      const user = new User('John', 'Doe');
      const actualFirstName = user.firstName;
      const expectedFirstName = 'John';
      assert(actualFirstName === expectedFirstName);
    });
  });
  describe('lastName constructor', () => {
    it('will return last name property', () => {
      const user = new User('Jane', 'Doe');
      const actualFirstName = user.lastName;
      const expectedFirstName = 'Doe';
      assert.strictEqual(actualFirstName, expectedFirstName);
    });
  });

  describe('fullName method', () => {
    it('it will return a concatenated full name with space', () => {
      const user = new User('John', 'Doe');
      const actualFullName = user.fullName();
      const expectedFullName = 'John Doe';
      assert(actualFullName === expectedFullName);
    });
  });

  describe('sayHello method', () => {
    it('it will return a string', () => {
      const user = new User('Jane', 'Doe');
      const actualHelloStr = user.sayHello('Bob');
      assert(typeof actualHelloStr === 'string');
      // expect(actualHelloStr).to.be.a('string');
    });
  });

  describe('constructor instance', () => {
    it('it will create a valid object', () => {
      const actualUser = new User();
      const expectedObj = { firstName: '', lastName: '' };
      assert.deepEqual(actualUser, expectedObj);
      // assert.hasAllKeys(actualUser, ['firstName', 'lastName']);
    });
  });
});
