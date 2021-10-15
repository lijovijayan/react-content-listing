import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AppBar } from '../appbar'

describe('testing appbar', () => {
    it('rendered properly', () => {
        const component = shallow(
            <AppBar onChange={() => {}} title="Appbar Render Test" />
        )
        const appbarTree = toJson(component)
        expect(appbarTree).toMatchSnapshot()
    })
})
