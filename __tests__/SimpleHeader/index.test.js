import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import SimpleHeader from "../../src/components/SimpleHeader";

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}));
jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}));
test('SimpleHeader renders correctly', async () => {

    const data = render(<SimpleHeader
        title="Header"
        showHeaderRight
        headerRightText="Delete"
        titleColor="#FFF"
        isCloseIcon
        itemsColor="#000"
        backgroundColor="#444"
        headerRightIcon="icons8_search_1-1"
    />)
    const HeaderById = await data.findByTestId("header-test")
    expect(HeaderById).toBeTruthy()
    const HeaderByText = await data.findByText("Header")
    expect(HeaderByText).toBeTruthy()
    expect(HeaderById.props.style[1].backgroundColor).toBe("#444")
    const title = await data.findByText("Header")
    expect(title.props.style[0].fontFamily).toBe("Shabnam")
    expect(title.props.style[0].fontSize).toBe( 18)
    expect(title).toBeTruthy()

})
