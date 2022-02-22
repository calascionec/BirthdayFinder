import PropTypes from 'prop-types';

import { MONTHS } from './utilities';

const Actions = ({
    handleCreateFakeData,
    handleFileChange,
    handleChange,
    handleFilterClick,
    selectedMonth
}) => (
    <>
        <span className="label">Form Actions</span>
        <div className="action-group">
            <button type="button" onClick={handleCreateFakeData}>Create Fake Data</button>
        </div>

        <div className="action-group">
            <label className="label" htmlFor="file-input">Upload a JSON file</label>
            <input id="file-input" type="file" onChange={handleFileChange} />
        </div>

        <div className="action-group">
            <label className="label" htmlFor="selected-month">Month to filter by:</label>
            <select
                id="selected-month"
                name="selectedMonth"
                onChange={handleChange}
                value={selectedMonth}
            >
                <option value="">Select a Month</option>
                {MONTHS.map((month, index) => (
                    <option key={month} value={index}>{month}</option>
                ))}
            </select>
        </div>

        <button type="button" onClick={handleFilterClick}>Filter Data</button>
    </>
);

Actions.propTypes = {
    handleCreateFakeData: PropTypes.func.isRequired,
    handleFileChange: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFilterClick: PropTypes.func.isRequired,
    selectedMonth: PropTypes.string.isRequired
};

export default Actions;