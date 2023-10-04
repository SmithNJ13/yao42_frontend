import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '.';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);




describe('RegisterPage', () => {

    afterEach(() => {
        cleanup();
    });

it('renders without crashing', () => {
    render(
    <Router>
    <Register />
    </Router>
    );
  }
);

it('renders the title', () => {
    render(<Router>
        <Register />
        </Router>);
    expect(screen.getByText('Register')).toBeInTheDocument();
  }
);

it('renders the form', () => {
    render(<Router>
        <Register />
        </Router>);
    expect(screen.getByTestId('Register')).toBeInTheDocument();
  });

it('renders the username field', () => {
    render(<Router>
        <Register />
        </Router>);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

it('renders the password field', () => {
    render(<Router>
        <Register />
        </Router>);
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('renders the confirm password field', () => {
    render(<Router>
        <Register />
        </Router>);
    expect(screen.getByText('Confirm Password')).toBeInTheDocument();
  }
);

it('renders the email field', () => {
    render(<Router>
        <Register />
        </Router>);
    const email = screen.getByLabelText('Email');
    expect(email).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders the sign up button', () => {
    render(<Router>
        <Register />
        </Router>);
    const button = screen.getByRole('button', { name: /Sign-Up/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Sign-Up')).toBeInTheDocument();
  }
);

it('renders the login link', () => {
    render(<Router>
        <Register />
        </Router>);
    const link = screen.getByRole('link', { name: /Login/i });
    expect(link).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('navigates to login page when login link is clicked', () => {
    render(<Router>
        <Register />
        </Router>);
    const link = screen.getByRole('link', { name: /Login/i });
    userEvent.click(link);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  
   
 
});
