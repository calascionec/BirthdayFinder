import { useReducer } from 'react';

import { isValidJson, createFakeData, getCurrentMonth } from '../utilities';

const reducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'UPDATE_RESULTS':
            return {
                ...state,
                results: action.results
            }
        case 'CREATE_FAKE_DATA':
            return {
                ...state,
                userInput: createFakeData()
            }
        case 'ADD_ERROR':
            return {
                ...state,
                errors: [...state.errors, action.text]
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                errors: []
            }
        default:
            return state;
    }
};

const useBirthdayFilter = () => {
    const currentMonth = getCurrentMonth();

    const [state, dispatch] = useReducer(reducer,
        {
            userInput: '',
            selectedMonth: currentMonth,
            results: '',
            errors: []
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'HANDLE_CHANGE', name, value });
    };

    const handleFilterClick = () => {
        dispatch({ type: 'CLEAR_ERRORS' });

        if (!state.userInput) {
            dispatch({ type: 'ADD_ERROR', text: 'No data has been entered' });
            return;
        }

        const inputText = isValidJson(state.userInput);

        if (!inputText) {
            dispatch({ type: 'ADD_ERROR', text: 'Invalid JSON entered' });
        }

        if (!state.selectedMonth) {
            dispatch({ type: 'ADD_ERROR', text: 'No month has been selected' });
        }

        if (inputText && state.selectedMonth) {
            const monthIndex = parseInt(state.selectedMonth);

            const results = inputText.filter((person) => {
                const birthday = new Date(person.birthday);
                const birthMonth = birthday.getMonth();

                return birthMonth === monthIndex;
            });

            dispatch({ type: 'UPDATE_RESULTS', results: JSON.stringify(results, null, 2) })
        }
    };

    const handleFileChange = (e) => {
        const { target } = e;

        let file = target.files[0];
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = () => {
            dispatch({ type: 'HANDLE_CHANGE', name: 'userInput', value: reader.result });
        };

        reader.onerror = () => {
            dispatch({ type: 'ADD_ERROR', text: reader.error });
        };
    };

    const handleCreateFakeData = () => {
        dispatch({ type: 'CREATE_FAKE_DATA' });
    };

    return {
        ...state,
        handleChange,
        handleFilterClick,
        handleFileChange,
        handleCreateFakeData
    }
};

export default useBirthdayFilter;