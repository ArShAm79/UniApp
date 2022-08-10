import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import IntroHeader from "../../src/components/IntroHeader";

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}))
jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}))
test('IntroHeader renders correctly', async () => {
    const data = render(<IntroHeader
        title="IntroHeader"
    />)
    const IntroHeaderByTestId = await data.findByTestId("intro-header-test")
    const IntroHeaderByText = await data.findByText("IntroHeader")

    expect(IntroHeaderByTestId).toBeTruthy()
    expect(IntroHeaderByText).toBeTruthy()
})