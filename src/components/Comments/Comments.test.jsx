import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, cleanup, screen, waitFor, fireEvent } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom';
import { act } from '@testing-library/react';
import axios from 'axios';
expect.extend(matchers);
import Comments from '.';


const axiosGetMock = vi.spyOn(axios, 'get');

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };
  global.localStorage = localStorageMock;

const sampleComments = [
    {
        "id": 1,
        "comment": "This recipe is amazing!",
        "recipe_id": 1,
        "user_id": 1
    }
  ];

describe("Comments component", () => {
    const postId = 1
    beforeEach(() => {
        global.localStorage.setItem('token', 'stuff');
    })

    afterEach(() => {
        global.localStorage.removeItem('token');
        cleanup()
    })

    it("Fetches comments from the API", async () => {
        
        render( 
            <MemoryRouter initialEntries={[`/profile/${postId}`]}>
            <Comments recipe_id={1}/>
          </MemoryRouter>)

        
        await waitFor(() => {
            expect(screen.getByText("This recipe is amazing!")).toBeInTheDocument();
        });
        
    });

    it("Calls the delete request from the API", async () => {

       render( 
            <MemoryRouter initialEntries={[`/profile/${postId}`]}>
            <Comments recipe_id={1}/>
          </MemoryRouter>)

        
        await waitFor(() => {
            const deleteButton = screen.getAllByTestId("button")
            fireEvent.click(deleteButton[0])
            
        });
       

        })


    })



    

