import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import WordList from "../components/WordList";


const Home = () => {
    const navigate = useNavigate();

    return(
        <div>
            <WordList />
            <MyButton text={"+"} onClick= {() => navigate("/new")} />
        </div>
    )
}

export default Home;