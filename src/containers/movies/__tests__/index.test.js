
import { Movies } from '../index';

describe('testing movies module', () => {
    it('rendered properly', () => {
        const movies = <Movies />
        expect(movies).toMatchSnapshot()
    })
})
