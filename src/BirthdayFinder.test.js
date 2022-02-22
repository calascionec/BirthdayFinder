import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import BirthdayFinder from './BirthdayFinder';

import { getCurrentMonth, isValidJson } from './utilities';

const testData = [
    {
        "name": "Lillian Johns",
        "birthday": "2022-02-13T22:09:42.435Z"
    },
    {
        "name": "Shirley Willms",
        "birthday": "2022-01-13T07:48:25.045Z"
    },
    {
        "name": "Joan Farrell",
        "birthday": "2021-09-23T01:12:49.512Z"
    },
    {
        "name": "Ivan Pfannerstill",
        "birthday": "2021-09-15T22:50:55.824Z"
    }
];

const expectedReturn = [
    {
        "name": "Joan Farrell",
        "birthday": "2021-09-23T01:12:49.512Z"
    },
    {
        "name": "Ivan Pfannerstill",
        "birthday": "2021-09-15T22:50:55.824Z"
    }
];

test('filters array of objects by data', () => {
    const currentMonth = getCurrentMonth();

    render(<BirthdayFinder />);
    const createFakeDataButton = screen.getByText(/Create Fake Data/i);
    const userInput = screen.getByRole('textbox', { name: 'User Input' });
    const results = screen.getByRole('textbox', { name: 'Results'});
    const select = screen.getByRole('combobox', { name: 'Month to filter by:' });
    const filterDataButton = screen.getByText(/Filter Data/i);

    // assert initial state
    expect(userInput).toHaveTextContent('');
    expect(results).toHaveTextContent('');
    expect(select).toHaveValue(currentMonth);

    //Generate valid JSON data
    userEvent.click(createFakeDataButton);
    const userInputValue = userInput.value;
    expect(isValidJson(userInputValue)).toBeTruthy();

    //Test filter
    fireEvent.change(userInput, { target: { value: JSON.stringify(testData, null, 2) } });
    fireEvent.change(select, { target: { value: '8' } });
    userEvent.click(filterDataButton);
    expect(results).toHaveValue(JSON.stringify(expectedReturn, null, 2))
})