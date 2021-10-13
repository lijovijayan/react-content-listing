
import { Home } from '../index';

describe('testing home module', () => {
    it('rendered properly', () => {
        const home = <Home />
        expect(home).toMatchSnapshot()
    })
})
