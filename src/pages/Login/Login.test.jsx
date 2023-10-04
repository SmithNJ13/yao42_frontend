import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '.';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);




describe('Login Page', () => {

    afterEach(() => {
        cleanup();
    });

it('renders without crashing', () => {
    render(
    <Router>
    <Login />
    </Router>
    );
  }
);

it('renders the title', () => {
    render(<Router>
        <Login />
        </Router>);
    const title = screen.getByRole('heading', { name: /Login/i });
    expect(title).toBeInTheDocument();
  }
);

it('renders the form', () => {
    render(<Router>
        <Login />
        </Router>);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

it('renders the username field', () => {
    render(<Router>
        <Login />
        </Router>);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

it('renders the password field', () => {
    render(<Router>
        <Login />
        </Router>);
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('renders the login button', () => {
    render(<Router>
        <Login />
        </Router>);
    const button = screen.getByRole('button', { name: /Login/i });
    expect(button).toBeInTheDocument();
  }
);

it('renders the sign up link', () => {
    render(<Router>
        <Login />
        </Router>);
    const link = screen.getByRole('link', { name: /Sign-up/i });
    expect(link).toBeInTheDocument();
  });

  // it('navigates to Sign up page when login link is clicked', () => {
  //   render(<Router>
  //       <Login />
  //       </Router>);
  //   const link = screen.getByRole('link');
  //   userEvent.click(link);
  //   expect(window.location.pathname).toBe('/register')
  // });
  
   
 
});
