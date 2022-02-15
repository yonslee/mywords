import { useNavigate } from "react-router-dom";
import WordsHeader from "../components/WordsHeader";
import WordsButton from "../components/WordsButton";
import CardList from "./CardList";
import { useContext, useEffect, useState } from "react";
import { WordsStateContext } from "../App";


const Home = () => {

    const cardList = useContext(WordsStateContext);

    const [data, setData] = useState([]);

    console.log(data);

    const navigate = useNavigate();

    return (
        <div>
            <WordsHeader headText={"MY DICTIONARY"} />
            {/* <CardList cardList={data}/> */}
            <WordsButton text={"+"} onClick= {() => navigate("/New")} />
        </div>
    );
};

export default Home;