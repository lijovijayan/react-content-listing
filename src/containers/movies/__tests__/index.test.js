import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Movies } from '../index'
import StoreProvider from '../../../store/store.provider'

describe('testing movies module', () => {
    it('rendered properly', () => {
        const component = shallow(
            <StoreProvider>
                <Movies />
            </StoreProvider>
        )
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})
