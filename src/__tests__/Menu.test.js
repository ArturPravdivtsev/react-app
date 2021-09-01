import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import firebase from '../services/firebase';

test('Menu matches snapshot', () => {
    const component = render(<Provider store={{getState: jest.fn(), subscribe: jest.fn(), dispatch: jest.fn()}}><BrowserRouter><Menu /></BrowserRouter></Provider>);
    expect(component).toMatchSnapshot();
});
