const CardItem = ({ id, word, explain, example }) => {
    return (
        <div>
            <card className="CardItem">
                <div>번호 : {id}</div>
                <div>{word}</div>
                <div>{explain}</div>
                <div>{example}</div>
            </card>
        </div>
    );
};

export default CardItem;