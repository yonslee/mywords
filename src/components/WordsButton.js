const WordsButton = ({ text, type, onClick }) => {
    const btnType = ['positive', 'negative'].includes(type)? type:'default';
    
    return(
        <button
            className={["WordsButton", `WordsButton_${type}`].join(" ")}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

WordsButton.defaultProps = {
    type: "default",

}

export default WordsButton