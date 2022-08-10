import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import CustomInput from "../../src/components/CustomInput";
import CustomTab from "../../src/components/CustomTab";

jest.mock('react-redux', () => ({
    useSelector: () => {
        return {theme: {tabs: {}}}
    },
}));
test('CustomInput renders correctly', async () => {
    const data = render(<CustomTab
        tabs={["Test1", "Test2"]}
        activeTab={1}
        tabContents={["Test1", "Test2"]}
    />)
    const Tab =await data.findByTestId("tab-test")
    const FirstTextTab =await data.findByText("Test1")
    const SecondTextTab =await data.findByText("Test2")
    expect(Tab).toBeTruthy()
    expect(FirstTextTab).toBeTruthy()
    expect(SecondTextTab).toBeTruthy()
})