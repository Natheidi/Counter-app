const StepCount = (props) => { //bedzie przekazany props
    //props.nazwa propsa 
    return (
        <div className="kroki">
            <label>Kroki
                <input type="number" onChange={(e) => props.setStep(e.target.value)} min="1" /> 
            </label>

        </div>
    );
};

export default StepCount;