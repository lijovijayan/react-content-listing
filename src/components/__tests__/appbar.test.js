import React from 'react'
import TestRenderer from 'react-test-renderer'
import { AppBar } from '../appbar'

describe('testing appbar', () => {
    it('rendered properly', () => {
        const appbarTree = TestRenderer.create(
            <AppBar onChange={() => {}} title="" />
        ).toJSON()
        expect(appbarTree).toMatchSnapshot()
    })
})
