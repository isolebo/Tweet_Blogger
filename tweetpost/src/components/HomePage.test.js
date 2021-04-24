import React from 'react';
import { shallow } from 'enzyme'
import HomePage from "./Homepage"


    test('should render title', () => {
        const wrapper = shallow(<HomePage />)
        expect(wrapper.find("h2").text()).toContain("Welcome  To Tweet & Post")
    })

