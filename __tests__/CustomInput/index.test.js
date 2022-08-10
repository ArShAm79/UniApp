import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import CustomInput from "../../src/components/CustomInput";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}));
test('CustomInput renders correctly', async () => {
    const data = render(<CustomInput
        label="label"
        style={{width: 100, height: 50}}
        labelColor="#000"
        labelStyle={{fontSize: 10}}
        keyboardType='numeric'
        endIcon="icons8_teacher-1-course"
        startIcon="indeterminate_check_box"
        helperText="helperText"
    />)
    const Input = await data.findByTestId("input-test")
    expect(Input).toBeTruthy()
    expect(Input.props.style[1].width).toBe(100)
    expect(Input.props.style[1].height).toBe(50)
    expect(Input.props.keyboardType).toBe("numeric")
    const Label = await data.findByText("label")
    expect(Label.props.style[1][1].fontSize).toBe(10)
    expect(Label.props.style[2].color).toBe("#000")
    expect(Label.props.style[0].fontFamily).toBe("Shabnam-Bold")
    const HelperText = await data.findByText("helperText")
    expect(HelperText).toBeTruthy()
    expect(HelperText.props.style[0].fontFamily).toBe("Shabnam")
    expect(HelperText.props.style[0].fontSize).toBe(16)
})
test('CustomInput SecureTextEntry renders correctly', async () => {
    const data = render(<CustomInput
        label="new-label"
        style={{width: 200, height: 20}}
        labelColor="#123"
        labelStyle={{fontSize: 15}}
        keyboardType='numeric'
        helperText="newHelperText"
        secureTextEntry={true}
    />)
    const SecureTextEntry = await data.findByTestId("input-test")
    expect(SecureTextEntry).toBeTruthy()
    expect(SecureTextEntry.props.style[1].width).toBe(200)
    expect(SecureTextEntry.props.style[1].height).toBe(20)
    expect(SecureTextEntry.props.keyboardType).toBe("numeric")
    const SecureTextEntryLabel = await data.findByText("new-label")
    expect(SecureTextEntryLabel.props.style[1][1].fontSize).toBe(15)
    expect(SecureTextEntryLabel.props.style[2].color).toBe("#123")
    expect(SecureTextEntryLabel.props.style[0].fontFamily).toBe("Shabnam-Bold")
    const SecureTextEntryHelperText = await data.findByText("newHelperText")
    expect(SecureTextEntryHelperText).toBeTruthy()
    expect(SecureTextEntryHelperText.props.style[0].fontFamily).toBe("Shabnam")
    expect(SecureTextEntryHelperText.props.style[0].fontSize).toBe(16)
})