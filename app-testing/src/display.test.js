import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { shallow } from 'enzyme';

 import Display from './Display';

 describe('The Display Component', () => {
    test('rendering', () => {
        render(<Display />);
    })
    it('shallow rendering', () => {
        shallow(<Display />);
    })
    it('displays strike & ball', () => {
        const display = render(<Display />);
        const strikes = display.getByTestId('strikes');
        const balls = display.getByTestId('balls');
    
    })
})