/* eslint-disable react/display-name */
import React from 'react';
import { describe, it, expect, beforeEach, jest} from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import Loading from '.';

describe('Loading Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Loading />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
  });


    it('renders a loading text', () => {
        const text = document.querySelector('.text');
        expect(text).toBeInTheDocument();
    });

    it('renders a loading container', () => {
        const loadingCon = document.querySelector('.loading-con');
        expect(loadingCon).toBeInTheDocument();
    });

    it('renders a child container', () => {
        const childCon = document.querySelector('.child-con');
        expect(childCon).toBeInTheDocument();
    });

   

})
