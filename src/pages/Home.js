import { useNavigate, useParams } from "react-router-dom";
import WordsButton from "../components/WordsButton";

const Home = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <p>이곳은 홈</p>
            <div className="AddNewWord">
                <WordsButton
                    type={'write'}
                    text={'+'}
                    onClick={() => navigate('/New')}
                />
            </div>
        </div>
    );
};

export default Home;