import React, { createContext, useReducer, useEffect } from 'react';

export const initialState = {
  theme: 'light',
  data: [],
  favorites: [],
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'ADD_FAV':
        return { ...state, favorites: [...state.favorites, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_DATA', payload: data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};