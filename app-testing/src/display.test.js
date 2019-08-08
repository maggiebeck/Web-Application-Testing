import React from 'react';
import { render } from 'react-testing-library';



 import Display from './Display';

 describe( () => {
    test( () => {
        render(<Display />);
    })
    it( () => {
        shallow(<Display />);
    })
    it(() => {
        const display = render(<Display />);
        const strikes = display.getByTestId('strikes');
        const balls = display.getByTestId('balls');
    
    })
})