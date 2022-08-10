import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import CustomAlert from "../../src/components/CustomAlert";

test('Buttons renders correctly', async () => {
    const data = render(<CustomAlert
        title="CustomAlertTitle"
        titleColor="#FFF"
        titleStyle={{fontSize: 10, fontWeight: 'bold'}}
        message="CustomAlertMessage"
        messageColor="#000"
        messageStyle={{fontSize: 12, fontWeight: 'normal'}}
        icon="icons8_search_1-1"
        iconColor="#123456"
        iconSize={20}
        buttons={[{title: "Ok"}, {title: "Cancel"}]}
    />)
    const CustomAlertByTestId = await data.findByTestId("custom-alert-test")
    expect(CustomAlertByTestId).toBeTruthy()
    const CustomAlertTitleByText = await data.findByText("CustomAlertTitle")
    expect(CustomAlertTitleByText).toBeTruthy()
    expect(CustomAlertTitleByText.props.style[1][1].fontSize).toBe(10)
    expect(CustomAlertTitleByText.props.style[1][1].fontWeight).toBe("bold")
    expect(CustomAlertTitleByText.props.style[2].color).toBe("#FFF")

    const CustomAlertMessageByText = await data.findByText("CustomAlertMessage")

    expect(CustomAlertMessageByText.props.style[1][1].fontSize).toBe(12)
    expect(CustomAlertMessageByText.props.style[1][1].fontWeight).toBe("normal")
    expect(CustomAlertMessageByText).toBeTruthy()

    const FirstCustomAlertMessageByText = await data.findByText("Ok")
    const SecondCustomAlertMessageByText = await data.findByText("Cancel")
    expect(FirstCustomAlertMessageByText).toBeTruthy()
    expect(SecondCustomAlertMessageByText).toBeTruthy()
})