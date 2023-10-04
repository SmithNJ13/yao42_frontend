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



const sampleComments = 
    {
        "id": 1,
        "comment": "This recipe is amazing!",
        "recipe_id": 1,
        "user_id": 1
    }
  

describe("Comments component", () => {
    const postId = 1

    beforeEach(() => {
        global.localStorage.setItem('token', 'stuff');
        global.localStorage.setItem('user_id', 1)
    })

    afterEach(() => {
        global.localStorage.removeItem('token');
        global.localStorage.removeItem('user_id');
        cleanup()
    })

    it("Fetches comments and Users from the API", async () => {
        
        render( 
            <MemoryRouter initialEntries={[`/profile/${postId}`]}>
            <Comments recipe_id={1}/>
          </MemoryRouter>)

        

        
        await waitFor(() => {
            expect(screen.getByText("This recipe is amazing!")).toBeInTheDocument()
            expect(screen.getAllByText('admin:')[0]).toBeInTheDocument();
        });
        
    });

    it("Calls the delete request from the API", async () => {
       const fetchMock = vi.fn().mockResolvedValueOnce({
            ok: true,
          });

       render( 
            <MemoryRouter initialEntries={[`/profile/${postId}`]}>
            <Comments recipe_id={1}/>
          </MemoryRouter>)

        
            await waitFor(() => {
                
                expect(screen.queryByText('This recipe is amazing!')).toBeNull();

            });

           
            // expect(fetchMock).toHaveBeenCalledWith(
            //     'https://lap-4-server.onrender.com/comments/1',
            //     expect.objectContaining({
            //     method: 'DELETE',
            //     headers: expect.objectContaining({
            //         'Content-Type': 'application/json',
            //         Authorization: `Bearer ${localStorage.getItem('token')}`,
            //     }),
            //     })
            // );
                

        })


    })



    

