import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import ContactForm from './ContactForm';

type TestElement = Document | Element | Window | Node;

const hasInputValue = (e: TestElement, inputValue: string) => {
  return screen.getByDisplayValue(inputValue) === e;
};

describe('<ContactForm />', () => {
  test('test all of the form inputs', () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    const name = screen.getByPlaceholderText('Name*');
    const email = screen.getByPlaceholderText('Email Address*');
    const company = screen.getByPlaceholderText('Company Name*');
    const title = screen.getByPlaceholderText('Title');
    const message = screen.getByPlaceholderText('Message');

    fireEvent.change(name, { target: { value: 'Tester Test' } });
    fireEvent.change(email, { target: { value: 'test@testing.com' } });
    fireEvent.change(company, { target: { value: 'Testing Co.' } });
    fireEvent.change(title, { target: { value: 'Developer' } });
    fireEvent.change(message, { target: { value: 'This is a test.' } });

    expect(hasInputValue(name, 'Tester Test')).toBe(true);
    expect(hasInputValue(email, 'test@testing.com')).toBe(true);
    expect(hasInputValue(company, 'Testing Co.')).toBe(true);
    expect(hasInputValue(title, 'Developer')).toBe(true);
    expect(hasInputValue(message, 'This is a test.')).toBe(true);
  });
});
