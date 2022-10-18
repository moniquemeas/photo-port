import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //frst test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('match snaphot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

