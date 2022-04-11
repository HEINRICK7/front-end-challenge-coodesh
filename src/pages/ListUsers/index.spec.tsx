import { render } from '@testing-library/react'

import ListUsers from './index'

describe('ListUsers Components', () => {
    it('should render list Patient', () => {
        const {getByText} = render(<ListUsers/>)

        expect(getByText('name')).toBeInTheDocument()
    })

})