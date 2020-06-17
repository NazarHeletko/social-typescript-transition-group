import authReducer, {isAuthAC} from './auth-reducer'

let state = {
    isAuthorized: false,
    authData: {
        id: 0,
        login: '',
        email: ''
    }
};

it('authorization completed successfully', () => {

    let action = isAuthAC(true, {id: 1, login: 'Test', email: 'test@tdd.com'});

    let newState = authReducer(state, action);

    expect(newState.isAuthorized).toBe(true);
});

it('updated data should be as expected', () => {

    let action = isAuthAC(true, {id: 1, login: 'Test', email: 'test@tdd.com'});

    let newState = authReducer(state, action);

    expect(newState.authData.id).toBe(1);
    expect(newState.authData.login).toBe('Test');
    expect(newState.authData.email).toBe('test@tdd.com');
});