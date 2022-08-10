import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import CustomIcon from "../../src/components/CustomIcon";

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}))
jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {}}
    },
}))
test('IntroHeader renders correctly', async () => {
    const data = render(<CustomIcon
        name="icons8_teacher-1-course"
    />)
    expect(data).toBeTruthy()
})