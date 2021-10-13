
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { LazyImage } from '../lazy.image';
import { shallow } from 'enzyme';

describe('testing lazy image', () => {
    it('rendered properly', () => {
        const cardTree = TestRenderer.create(shallow(<LazyImage className={''} src={''} alt={''} />)).toJSON()
        expect(cardTree).toMatchSnapshot()
    })
})
