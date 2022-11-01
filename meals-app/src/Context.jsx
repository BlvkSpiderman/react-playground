import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const getFavoritesFromLocalStorage = () => {
    let favoritesLocal = localStorage.getItem('favorites');
    if(favoritesLocal) {
        favoritesLocal = JSON.parse(localStorage.getItem('favorites')); 
    } else {
        favoritesLocal = [];
    }
    return favoritesLocal;
}

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal]  = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favorites, setFavorite] = useState(getFavoritesFromLocalStorage());

    const fetchMeals = async(url) => {
        setLoading(true);
        try {
            const {data} = await axios.get(url);
            if(data.meals) {
                setMeals(data.meals);
            } else {
                setMeals([]);
            }
        } catch (error) {
            console.log(error.response);
        }
        setLoading(false);
    } 

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl);
    }

    const selectMeal = ( idMeal, favoriteMeal) => {
        let meal;

        if(favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal === idMeal);    
        } else {
            meal = meals.find((meal) => meal.idMeal === idMeal);
        }

        setSelectedMeal(meal);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const addToFavorites = (idMeal) => {
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
        if(alreadyFavorite) return; //This line checks if the meal we want to add is already
                                    //in the favorites array, if it is, it stops, otherwise it 
                                    //continues to the next line.
        const updatedFavorites = [...favorites, meal];  //This line takes the already existing members of 
                                                        //of the array, then adds the new one if it isn't 
                                                        //already there then updates the state.
        setFavorite(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
 
    const removeFromFavorites = (idMeal) => {
        const updatedFavorites  = favorites.filter((meal) => meal.idMeal !== idMeal);
        setFavorite(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, [])

    useEffect(() => {
        if(!searchTerm) return    
       fetchMeals(`${allMealsUrl}${searchTerm}`);
    },[searchTerm]);

    return (
        <AppContext.Provider value={{   meals, 
                                        loading, 
                                        setSearchTerm, 
                                        fetchRandomMeal, 
                                        showModal, 
                                        selectMeal, 
                                        selectedMeal, 
                                        closeModal, 
                                        favorites,
                                        addToFavorites, 
                                        removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => useContext(AppContext);

export {AppContext, AppProvider}