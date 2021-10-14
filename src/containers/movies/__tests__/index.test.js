import React from 'react'
import TestRenderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Movies } from '../index'

describe('testing home module', () => {
    it('rendered properly', () => {
        const movies = TestRenderer.create(
            shallow(<Movies className={''} src={''} alt={''} />)
        ).toJSON()
        expect(movies).toMatchSnapshot()
    })
})
