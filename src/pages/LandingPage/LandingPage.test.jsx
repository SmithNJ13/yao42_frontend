import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '.';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);




describe('Landing Page', () => {

    afterEach(() => {
        cleanup();
    });

it('renders without crashing', () => {
    render(
    <Router>
    <LandingPage />
    </Router>
    );
  }
);


it('renders the spring title', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const title = screen.getByRole('heading', { name: /SPRING/i });
    expect(title).toBeInTheDocument();
  });

it('renders the summer title', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const title = screen.getByRole('heading', { name: /SUMMER/i });
    expect(title).toBeInTheDocument();
  });

it('renders the autumn title', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const title = screen.getByRole('heading', { name: /AUTUMN/i });
    expect(title).toBeInTheDocument();
  });

it('renders the winter title', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const title = screen.getByRole('heading', { name: /WINTER/i });
    expect(title).toBeInTheDocument();
  });

  it('renders the spring banner', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const banner = screen.getByTestId( 'spring' );
    expect(banner).toBeInTheDocument();
    });

    it('renders the summer banner', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const banner = screen.getByTestId( 'summer' );
    expect(banner).toBeInTheDocument();
    
    });

    it('renders the autumn banner', () => {

    render(<Router>
        <LandingPage />
        </Router>);

    const banner = screen.getByTestId( 'autumn' );
    expect(banner).toBeInTheDocument();
    }
    );

    it('renders the winter banner', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const banner = screen.getByTestId( 'winter' );
    expect(banner).toBeInTheDocument();
    }
    );

    it('navigates to spring page when spring banner is clicked', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const banner = screen.getByTestId( 'spring' );
    fireEvent.click(banner);
    expect(screen.getByText('SPRING')).toBeInTheDocument();
    }
    );

   it('navigates to summer page when summer banner is clicked', () => {
  render(<Router>
    <LandingPage />
    </Router>);
  const banner = screen.getByTestId( 'summer' );
    fireEvent.click(banner);
    expect(screen.getByText('SUMMER')).toBeInTheDocument();
    });

    it('navigates to autumn page when autumn banner is clicked', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const banner = screen.getByTestId( 'autumn' );
    fireEvent.click(banner);
    expect(screen.getByText('AUTUMN')).toBeInTheDocument();
    });

    it('navigates to winter page when winter banner is clicked', () => {
    render(<Router>
        <LandingPage />
        </Router>);
    const banner = screen.getByTestId( 'winter' );
    fireEvent.click(banner);
    expect(screen.getByText('WINTER')).toBeInTheDocument();
});
 

});  
