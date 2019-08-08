import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';

 describe('Dashboard', () => {

     test(() => {
        render(<Dashboard />);
    })

     it (() => {
        const dashboard = render(<Dashboard />);
        const strikeButton = dashboard.getByText(/strike/i);
        const ballButton = dashboard.getByText(/ball/i);
        const hitButton = dashboard.getByText(/hit/i);
        const foulButton = dashboard.getByText(/foul/i);

         expect(strikeButton).toHaveTextContent(/strike/i);
        expect(ballButton).toHaveTextContent(/ball/i);
        expect(hitButton).toHaveTextContent(/hit/i);
        expect(foulButton).toHaveTextContent(/foul/i);
    })

 })