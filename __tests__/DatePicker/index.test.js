import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import DatePicker from "../../src/components/DatePicker";
import {View} from "react-native";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {tabs: {}}}
    },
}));
// jest.mock('react-native-modal', () => ({
//     Modal: ({isOpen, children}) => {
//         return <View isOpen={isOpen}>
//             {children}
//         </View>
//     },
// }));
test('DatePicker renders correctly', async () => {
    const data = render(<DatePicker
        label="DatePicker"
        helperText="HelperTextDatePicker"
        style={{width: 100, height: 20}}
    />)
    const DatePickerByTestId = await data.findByTestId("date-picker-test")
    const DatePickerInputByTestId = await data.findByTestId("date-picker-input-test")
    const DatePickerLabelByText = await data.findByText("DatePicker")
    const HelperTextDatePickerByText = await data.findByText("HelperTextDatePicker")
    expect(DatePickerByTestId).toBeTruthy()
    expect(DatePickerLabelByText).toBeTruthy()
    expect(HelperTextDatePickerByText).toBeTruthy()
    expect(DatePickerInputByTestId).toBeTruthy()
    expect(DatePickerInputByTestId.props.style[1].width).toBe(100)
})