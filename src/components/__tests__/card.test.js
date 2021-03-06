import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Card } from '../card'

describe('testing card', () => {
    it('rendered properly', () => {
        const component = shallow(<Card imageURL={''} name={''} />)
        const componentTree = toJson(component)
        expect(componentTree).toMatchSnapshot()
    })
})
