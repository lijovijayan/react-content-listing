import React from 'react'
import TestRenderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { LazyImage } from '../lazy.image'

describe('testing lazy image', () => {
    it('rendered properly', () => {
        const cardTree = TestRenderer.create(
            shallow(<LazyImage className={''} src={''} alt={''} />)
        ).toJSON()
        expect(cardTree).toMatchSnapshot()
    })
})
