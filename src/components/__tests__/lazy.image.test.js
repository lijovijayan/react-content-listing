import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { LazyImage } from '../lazy.image'

describe('testing lazy image', () => {
    it('rendered properly', () => {
        const component = shallow(
            <LazyImage className={''} src={''} alt={''} />
        )
        const componentTree = toJson(component)
        expect(componentTree).toMatchSnapshot()
    })
})
