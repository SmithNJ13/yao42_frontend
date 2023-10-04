import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import userEvent from '@testing-library/user-event';
import RecipePage from './index';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);




describe('RecipePage', () => {

    afterEach(() => {
        cleanup();
    });


    it('renders without crashing', () => {
        render(
        <Router>
        <RecipePage />
        </Router>
        )
        ;
      });

it('renders the title', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Submit a Recipe')).toBeInTheDocument();
  }
);

it('renders the form', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByTestId('Post_Recipe')).toBeInTheDocument();
  });

it('renders the name field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

it('renders the description field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

it('renders the ingredients field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
  });

it('renders the instructions field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Instructions')).toBeInTheDocument();
  });

it('renders the budget field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Budget')).toBeInTheDocument();
  });

it('renders the season field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Season')).toBeInTheDocument();
  });

it('renders the image field', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Image')).toBeInTheDocument();
  });

it('renders the submit button', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

it('renders the vegetarian checkbox', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Vegetarian')).toBeInTheDocument();
  });

it('renders the vegan checkbox', () => {
    render(<Router>
      <RecipePage />
      </Router>);
    expect(screen.getByText('Vegan')).toBeInTheDocument();
  });

 
});
