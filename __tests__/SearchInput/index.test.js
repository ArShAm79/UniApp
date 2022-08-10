import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import SearchInput from "../../src/components/SearchInput";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}));
test('CustomInput renders correctly', async () => {
    const data = render(<SearchInput

    />)
    const Input = await data.findByTestId("search-input-test")

    expect(Input).toBeTruthy()
})