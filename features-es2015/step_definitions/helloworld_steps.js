'use strict';

import assert from 'assert';
import chai from 'chai';
import sinonchai from 'sinon-chai';

import {World} from '../support/world';

import greeting from '../../build/script/greeting.js';

const expect = chai.expect;
chai.use(sinonchai);

export default function() {

  this.World = World;
  this.Given(/^I have setup my development space correctly$/, function (callback) {
    assert.notEqual(this, null);
    callback();
  });

  this.When(/^I compile and run tests$/, function (callback) {
    assert.notEqual(chai, null);
    callback();
  });

  this.Then(/^I see the expected default message from loaded main module$/, function (callback) {
    expect(this.excitify(greeting)).to.equal('Hello, World!');
    callback();
  });

}
