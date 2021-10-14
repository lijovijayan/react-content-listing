import React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Card } from '../card'

describe('testing card', () => {
    it('rendered properly', () => {
        const cardTree = shallow(<Card imageURL={''} name={''} />).toJSON()
        expect(cardTree).toMatchSnapshot()
    })
})
