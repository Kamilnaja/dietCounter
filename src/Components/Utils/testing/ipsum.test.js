jest.autoMockOff();

import React from 'react';
import { ReactDOM } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Ipsum from './ipsum';

const Ipsum = require('./ipsum');

describe('Ipsum', () => {
    var ipsum = TestUtils.renderIntoDocument(
        <Ipsum></Ipsum>
    );

    var ipsumNode = ReactDOM.findDOMNode(ipsum);

    it('defaults have some text', () => {
        expect(ipsumNode.textContent).toEqual('ipsum')
    })
});

