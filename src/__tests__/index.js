import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Modal from '../index';

describe('Shallow Rendering', () => {

    it('to have class modal', () => {
        const wrapper = shallow(<Modal isConfirmation='true' />);
        expect(wrapper.find('.modal')).to.have.length(1);
    });
});
