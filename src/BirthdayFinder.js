import Actions from './Actions';
import Errors from './Errors';
import TextArea from './TextArea';

import useBirthdayFilter from './hooks/useBirthdayFilter';

const BirthdayFinder = () => {
    const {
        userInput,
        selectedMonth,
        results,
        errors,
        handleChange,
        handleFilterClick,
        handleFileChange,
        handleCreateFakeData
    } = useBirthdayFilter();

    return (
        <>
            <Errors {...{ errors }}/>

            <div className="form">
                <div className="form__user-input">
                    <TextArea
                        label="User Input"
                        id="user-input"
                        name="userInput"
                        value={userInput}
                        onChange={handleChange}
                    />
                </div>

                <div className="form__actions">
                    <Actions
                        {...{
                            handleCreateFakeData,
                            handleFileChange,
                            handleChange,
                            handleFilterClick,
                            selectedMonth
                        }}
                    />
                </div>
                <div className="form__results">
                    <TextArea
                        id="results"
                        name="results"
                        label="Results"            
                        value={results}
                        readOnly
                    />
                </div>
            </div>
        </>
    );
};

export default BirthdayFinder;