import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AppBar } from '../appbar'

describe('testing appbar', () => {
    it('rendered properly', () => {
        const appbar = <AppBar onChange={() => {}} title="Appbar Render Test" />
        const componentWrapper = shallow(appbar)
        let componentTree = toJson(componentWrapper)
        expect(componentTree).toMatchSnapshot()

        componentWrapper.find('#searchIcon').simulate('click')
        componentTree = toJson(componentWrapper)
        expect(componentTree).toMatchSnapshot()

        componentWrapper.find('#searchIcon').simulate('click')
        componentTree = toJson(componentWrapper)
        expect(componentTree).toMatchSnapshot()
    })
})
