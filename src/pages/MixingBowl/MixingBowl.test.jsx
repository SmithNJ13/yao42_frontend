import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import MixingBowl from '.';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);




describe('Mixing Bowl', () => {

    afterEach(() => {
        cleanup();
    });

it('renders without crashing', () => {
    render(
    <Router>
    <MixingBowl />
    </Router>
    );
  }
);

it('renders the title', () => {
    render(<Router>
        <MixingBowl />
        </Router>);
    const title = screen.getByRole('heading', { name: /MIXING BOWL/i });
    expect(title).toBeInTheDocument();
  });

  it("renders the 'find recipes button'"), () => {
    render(<Router>
        <MixingBowl />
        </Router>);
    const button = screen.getByRole('button', { name: /find recipes/i });
    expect(button).toBeInTheDocument();
    expect('Find Recipes!').toBeInTheDocument();
  }

 it('renders the mixing bowl image', () => {
    render(<Router>
        <MixingBowl />
        </Router>);
    const image = screen.getByRole('img', { name: /Mixing Bowl/i });
    expect(image).toBeInTheDocument();
    })

    it('renders the ingredients search bar', () => {
        render(<Router>
            <MixingBowl />
            </Router>);
        const searchBar = screen.getByTestId('input', { name: /Search for ingredients/i });
        expect(searchBar).toBeInTheDocument();
    })

    it('renders the add button', () => {
        render(<Router>
            <MixingBowl />
            </Router>);
        const button = screen.getByTestId('button', { name: /Add/i });
        expect(button).toBeInTheDocument();
    })

    it('plays the animation when the find recipes button is clicked', () => {
        render(<Router>
            <MixingBowl />
            </Router>);
        const button = screen.getByRole('button', { name: /Find recipes!/i });
        fireEvent.click(button);
        const animation = screen.getByTestId('animation', { name: /animation/i });
        expect(animation).toBeInTheDocument();
    });

   
    
  
});  
