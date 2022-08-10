import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import IntroButton from "../../src/components/IntroButton";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}));
test('IntroButton renders correctly', async () => {
    const data = render(<IntroButton
        title="IntroButton"
        textStyle={{color: "#000", fontSize: 20}}
        onPress={() => {
        }}
        style={{width: 100, height: 20, borderRadius: 10}}
    />)
    const introButtonByTestId = await data.findByTestId("intro-button-test")
    expect(introButtonByTestId).toBeTruthy()
    expect(introButtonByTestId.props.style[1].width).toBe(100)
    expect(introButtonByTestId.props.style[1].height).toBe(20)
    expect(introButtonByTestId.props.style[1].borderRadius).toBe(10)
    const introButtonByText = await data.findByText("IntroButton")
    expect(introButtonByText.props.style[1][1].color).toBe("#000")
    expect(introButtonByText.props.style[1][1].fontSize).toBe(20)
    expect(introButtonByText).toBeTruthy()
})