import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import CustomButton from "../../src/components/CustomButton";

test('Buttons renders correctly', async () => {
    const data = render(<CustomButton
        title="Button"
        onPress={() => {
        }}
        textStyle={{color: '#123456', fontSize: 20}}
        startIcon="icons8_search_1-1"
        startIconSize={16}
        startIconColor="#999"
        endIcon="icons8_search_1-1"
        endIconColor="#888"
        endIconSize={19}
    />)
    const ButtonById = await data.findByTestId("button-test")
    expect(ButtonById).toBeTruthy()
    expect(ButtonById.props.style[0].height).toBe(60)
    const ButtonByText = await data.findByText("Button")
    expect(ButtonByText).toBeTruthy()
    expect(ButtonByText.props.style[1][2].color).toBe("#123456")
    expect(ButtonByText.props.style[1][2].fontSize).toBe(20)
    const StartIconButtonByText = await data.findByTestId("button-start-icon-test")
    expect(StartIconButtonByText.props.style[0].color).toBe("#999")
    expect(StartIconButtonByText.props.style[0].fontSize).toBe(16)
    const EndIconButtonByText = await data.findByTestId("button-end-icon-test")
    expect(EndIconButtonByText.props.style[0].color).toBe("#888")
    expect(EndIconButtonByText.props.style[0].fontSize).toBe(19)
})
test('Buttons disable renders correctly', async () => {
    const data = render(<CustomButton
        title="Button"
        onPress={() => {
        }}
        textStyle={{color: '#123456', fontSize: 20}}
        startIcon="icons8_search_1-1"
        startIconColor="#999"
        endIcon="icons8_search_1-1"
        endIconColor="#888"
        disabled
        size="small"
    />)
    const DisableButtonById = await data.findByTestId("button-test")
    expect(DisableButtonById).toBeTruthy()
    expect(DisableButtonById.props.style[0].height).toBe(40)
    const DisableButtonByText = await data.findByText("Button")
    expect(DisableButtonByText).toBeTruthy()
    expect(DisableButtonByText.props.style[1][2].color).toBe("#123456")
    expect(DisableButtonByText.props.style[1][2].fontSize).toBe(20)
    const DisableStartIconButtonByText = await data.findByTestId("button-start-icon-test")
    expect(DisableStartIconButtonByText.props.style[0].color).toBe("#999")
    expect(DisableStartIconButtonByText.props.style[0].fontSize).toBe(20)
    const DisableEndIconButtonByText = await data.findByTestId("button-end-icon-test")
    expect(DisableEndIconButtonByText.props.style[0].color).toBe("#888")
    expect(DisableEndIconButtonByText.props.style[0].fontSize).toBe(20)
})