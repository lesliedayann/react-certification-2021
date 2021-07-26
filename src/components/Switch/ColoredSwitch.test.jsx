import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ColoredSwitch from './ColoredSwitch.component';

describe('<ColoredSwitch />', ()=>{
    const mockHandler = jest.fn();
    const props = {
        checked: false,
        toggleSwitch: mockHandler,
        switchColor:"white",
        label: "Dark Mode",
    };
    test('Render ColoredSwitch component', ()=>{
        render(<ColoredSwitch {...props}/>)
    });
    test('renders by Dark Mode', () => {
        render(<ColoredSwitch {...props} />);
        const darkMode = screen.getByText(/Dark Mode/i);
        expect(darkMode).toBeInTheDocument();
    });
    test('Render after click', () => {
        const {getByRole} =render( <ColoredSwitch {...props} />);
        const button = getByRole('checkbox');
        fireEvent.click(button);
        expect(mockHandler).toHaveBeenCalledTimes(1);
      });
});
