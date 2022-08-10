import 'react-native'
import React from 'react'
import Typography from '../../src/components/Typography'
import {render} from '@testing-library/react-native'

test('Typography renders correctly', async () => {
    const data = render(<Typography variant="h1" color="#FFFFFF">Hi</Typography>)
    const TextByText = await data.findByText("Hi")
    const TextById =await data.queryByTestId("typography-test")
    expect(TextByText.props.style[0].fontFamily).toBe( "Shabnam-Bold")
    expect(TextByText.props.style[2].color).toBe( "#FFFFFF")
    expect(TextByText.props.style[0].fontSize).toBe( 35)
    expect(TextById.props.style[2].color).toBe( "#FFFFFF")
    expect(TextById.props.style[0].fontSize).toBe( 35)
    expect(TextById.props.style[0].fontFamily).toBe( "Shabnam-Bold")
    expect(TextByText).toBeTruthy()
    expect(TextById).toBeTruthy()
})
