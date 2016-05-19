import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Application from '../src/application'

test('it renders Hello World!', t => {
    const application = shallow(<Application />);
    t.is(application.text(), 'Hello World!');
});