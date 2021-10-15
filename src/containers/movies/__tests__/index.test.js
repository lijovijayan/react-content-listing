import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Movies } from '../index'

describe('testing movies module', () => {
    it('rendered properly', () => {
        const component = shallow(<Movies className={''} src={''} alt={''} />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})
