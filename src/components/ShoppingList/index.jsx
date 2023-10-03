import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchShoppingList = async () => {
            const userId = localStorage.getItem('user_id');
            try {
                const response = await axios.get('https://lap-4-server.onrender.com/lists');
                const relevantItems = response.data.lists
                    .filter(list => list.user_id.toString() === userId)
                    .flatMap(list => list.items.split(/,|\./).map(item => item.trim()));
                setItems(relevantItems);
            } catch (error) {
                console.error("Error fetching shopping list:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchShoppingList();
    }, []);

    const handleCheckChange = (index) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <>
            <div className="shopping-container">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {items.map((item, index) => (
                            <li id ="shopping_list_item" key={index}>
                                <input 
                                    type="checkbox" 
                                    checked={checkedItems[index] || false} 
                                    onChange={() => handleCheckChange(index)} 
                                />
                                <span className={checkedItems[index] ? "checked-item" : ""}>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ShoppingList;
