import { useNavigate } from "react-router-dom";
import WordsHeader from "../components/WordsHeader";
import WordsButton from "../components/WordsButton";
import { useState } from "react";

const New = () => {
    const navigate = useNavigate();

    const [word, setWord] = useState("");
    const [explain, setExplain] = useState("");
    const [example, setExample] = useState("");

    return (
        <div>
            <WordsHeader headText={"새 단어 추가"} />
            <div>
                <section>
                    <h5>단어</h5>
                    <div className="input-box">
                        <input
                            value={word}
                            onChange={(e) => {}}
                        />
                    </div>
                </section>
                <section>
                    <h5>설명</h5>
                    <div className="input-box">
                        <textarea value={explain} />
                    </div>
                </section>
                <section>
                    <h5>예시</h5>
                    <div className="input-box">
                        <textarea value={example} />
                    </div>
                </section>
            </div>
            <WordsButton text={"X"} onClick= {() => navigate(-1)} />
        </div>
    );
};

export default New;