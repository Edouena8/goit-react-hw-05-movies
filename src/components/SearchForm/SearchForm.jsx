const SeaechForm = ({handleFormSubmit}) => {
    return (
        <div>
            <form onSubmit={handleFormSubmit}>                   
                <input 
                    type="text"
                    name="filmtitle"
                    // onChange={onParamsChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default SeaechForm;