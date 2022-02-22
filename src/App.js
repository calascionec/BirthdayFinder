import BirthdayFinder from './BirthdayFinder';

const App = () => (
    <div id="app" className="app">
        <div className="app__header">
            <h1>Filter employees by their birthday month</h1>
            <strong>App Requirements</strong>
            <ul>
                <li>Given I have an array of employee records that include their birthday</li>
                <li>When I execute this script/program with the array of employees</li>
                <li>Then I am returned an array of employees who's birthday is in the current month</li>
            </ul>
            <strong>App Instructions</strong>
            <ol>
                <li>
                    Add an Array of records to the User Input field. The array can be typed directly into the field, uploaded from a JSON file, or fake data can be used by clicking the Create Fake Data Button.
                </li>
                <li>
                    By default, the current month is selected to filter by. You may use the "Month to filter by" select to change the month.
                </li>
                <li>
                    Click the "Filter Data" button to return the filtered list of records.
                </li>
            </ol>
        </div>
      
    <BirthdayFinder />
    </div>
);

export default App;
