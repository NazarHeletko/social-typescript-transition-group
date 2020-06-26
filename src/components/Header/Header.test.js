import React from 'react'
import {shallow} from 'enzyme'
import Header from "./Header"
import {findByTestAtrr} from "../../utils/utils";

const setUp = (props= {}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('Header component', () => {

    describe('Check no condition elements', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('It should render without errors', () => {
            const header = findByTestAtrr(component, 'headerTest');
            expect(header.length).toBe(1);
        });

        it('Should render a logo', () => {
            const logo = findByTestAtrr(component, 'logoTest');
            expect(logo.length).toBe(1);
        });

        it('Should render a logo image', () => {
            const logoImage = findByTestAtrr(component, 'reactLogoTest');
            expect(logoImage.length).toBe(1);
        });
    });

    describe('Check elements with condition', () => {
        let component;
        beforeEach(() => {
            const props = {
                isAuth: false,
                authData: {
                    id: 3,
                    login: 'test',
                    email: 'test@test.com'
                },
                isAuthThunk: () =>{console.log('test')}
            };
            component = setUp(props)
        });

        it(`social title should render when user don't authorized`, () => {
            const social = findByTestAtrr(component, 'socialTest');
            expect(social.length).toBe(1);
        });
        it(`user hello should not render when user don't authorized`, () => {
            const hello = findByTestAtrr(component, 'helloTest');
            expect(hello.length).toBe(0);
        });

        it(`login button should render when user don't authorized`, () => {
            const login = findByTestAtrr(component, 'loginBtnTest');
            expect(login.length).toBe(1);
        });

        it(`logout button should not render when user authorized`, () => {
            const logout = findByTestAtrr(component, 'logoutBtnTest');
            expect(logout.length).toBe(0);
        });
    });
});