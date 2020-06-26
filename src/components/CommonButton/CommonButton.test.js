import React from 'react'
import {shallow} from 'enzyme'
import CommonButton from "./CommonButton";
import {findByTestAtrr} from "../../utils/utils";
import Header from "../Header/Header";

const setUp = (props= {}) => {
    const component = shallow(<CommonButton {...props}/>);
    return component;
};

describe('Common button component', () => {
    let component;
    beforeEach(() => {
        const props = {
            title: 'test'
        };
        component = setUp(props)
    });
    it('Button text should be expected', () => {
        const commonBtn = findByTestAtrr(component, 'loginBtnTest');
        expect(commonBtn.text()).toBe('test');
    });
});