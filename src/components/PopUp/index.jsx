import "./PopUp.css"

const PopUp = ({SetOpenPopUp}) => {
    

    return (
        <div onClick={() => {SetOpenPopUp(false)}} data-testid="modalBackground" className="modalBackground">
            <div onClick={(click) => {click.stopPropagation()}} data-testid="modalContainer" className="modalContainer">
                <div className="title">
                    <h1>Recipe Created!</h1>
                </div>
                <div className="body">
                    <p>Your recipe has been added</p>
                </div>
                <div className="footer">
                    <button onClick={() => {SetOpenPopUp(false)}}>That's great!</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp