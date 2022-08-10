import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import HorizontalSeparator from "../../src/components/HorizontalSeparator";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}));
test('HorizontalSeparator renders correctly', async () => {
    const data = render(<HorizontalSeparator
        color="#000"
        height={5}
        width={30}
        marginBottom={20}
        marginTop={40}
    />)
    const Separator = await data.findByTestId("horizontal-separator-test")
    expect(Separator.props.style[0].backgroundColor).toBe("#000")
    expect(Separator.props.style[0].height).toBe(5)
    expect(Separator.props.style[0].width).toBe(30)
    expect(Separator.props.style[0].marginBottom).toBe(20)
    expect(Separator.props.style[0].marginTop).toBe(40)
    expect(Separator).toBeTruthy()
})
test('SimpleHorizontalSeparator renders correctly', async () => {
    const data = render(<HorizontalSeparator

    />)
    const SimpleHorizontalSeparator = await data.findByTestId("horizontal-separator-test")
    expect(SimpleHorizontalSeparator.props.style[0].backgroundColor).toBe(undefined)
    expect(SimpleHorizontalSeparator.props.style[0].height).toBe(1)
    expect(SimpleHorizontalSeparator.props.style[0].width).toBe('100%')
    expect(SimpleHorizontalSeparator.props.style[0].marginBottom).toBe(0)
    expect(SimpleHorizontalSeparator.props.style[0].marginTop).toBe(0)
    expect(SimpleHorizontalSeparator).toBeTruthy()
})