import CardItem from "../components/CardItem";

const CardList = ({ cardList }) => {

    return (
        <div className="CardList">
            {cardList.map((it) => (
                <CardItem key={it.id} {...it} />
            ))}
        </div>
    );

};

CardList.defaultProps = {
    cardList:[],
}

export default CardList;