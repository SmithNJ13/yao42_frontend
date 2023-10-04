import { describe, it, expect, beforeEach, afterEach} from 'vitest'
import { screen, render, cleanup, fireEvent, getByTestId, waitFor} from '@testing-library/react'
import { MemoryRouter} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'  
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import ShoppingPage from '.'
import { ShoppingList } from '../../components'



describe("ShoppingPage page", () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
            <ShoppingPage>
                <ShoppingList/>
            </ShoppingPage>
            </MemoryRouter>
        )
    });

    afterEach(() => {
        cleanup();
    })

   
    it("displays h1 with specified text", () => {
        const h1 = screen.getByTestId('Shopping_Title')
        expect(h1).toBeInTheDocument()
    })

    it("Contains the ShoppingList component", () => {
        const shoppingList = screen.getByTestId('shopping-list')
        expect(shoppingList).toBeInTheDocument()
    }
    )
    
    // it('should close the pop-up when closePopUp is called', async () => {
    //     const { getAllByTestId, queryByTestId } = render(
    //       <MemoryRouter>
    //         <ShoppingPage />
    //       </MemoryRouter>
    //     );
    //     fireEvent.click(getAllByTestId('Close_Button')[0]);
    //     await waitFor(() => {
    //       expect(queryByTestId('Close_Button')).not.toBeInTheDocument();
    //     });
    //   });
    

})
