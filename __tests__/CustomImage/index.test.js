import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import CustomImage from "../../src/components/CustomImage";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}));
test('CustomImage renders correctly', async () => {

    const data = render(<CustomImage
        style={{color: 'red', height: 50, width: 50, borderRadius: 10}}
    />)
    const Image = await data.findByTestId("image-test")
    expect(Image).toBeTruthy()
    expect(Image.props.style.color).toBe('red')
    expect(Image.props.style.height).toBe(50)
    expect(Image.props.style.width).toBe(50)
    expect(Image.props.style.borderRadius).toBe(10)
})
