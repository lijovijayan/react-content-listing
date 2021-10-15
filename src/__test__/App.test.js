import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from '../App'

describe('testing whole application', () => {
    it('rendered properly', () => {
        const component = shallow(<App />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})
