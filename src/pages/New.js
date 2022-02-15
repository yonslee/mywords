import { useNavigate } from "react-router-dom";
import WordsHeader from "../components/WordsHeader";
import WordsButton from "../components/WordsButton";
import { useContext, useRef, useState } from "react";
import { WordsDispatchContext } from "../App";

const New = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        word: "",
        explain: "",
        example: "",
    });

    const {onCreate} = useContext(WordsDispatchContext)

    const wordInput = useRef();
    const explainInput = useRef();
    const exampleInput = useRef();

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.word.length < 1){
            wordInput.current.focus();
            return;
        }
        if(state.explain.length < 1){
            explainInput.current.focus();
            return;
        }
        if(state.example.length < 1){
            exampleInput.current.focus();
            return;
        }

        onCreate(state.word, state.explain, state.example);
        alert("추가 완료");
        setState({
            word: "",
            explain: "",
            example: "",
        });
        navigate('/', {replace:true});
    };

    return (
        <div className="NewWord">
            <WordsHeader headText={"새 단어 추가"} />
            <div>
                <section>
                    <h5>단어</h5>
                    <div>
                        <input
                            ref={wordInput}
                            placeholder="단어 입력"
                            name="word"
                            type="text"
                            value={state.word}
                            onChange={handleChangeState}
                        />
                    </div>
                </section>
                <section>
                    <h5>설명</h5>
                    <div className="input-box">
                        <textarea
                            ref={explainInput}
                            placeholder="무슨 뜻인가요?"
                            name="explain"
                            type="text"
                            value={state.explain}
                            onChange={handleChangeState}
                        />
                    </div>
                </section>
                <section>
                    <h5>예시</h5>
                    <div className="input-box">
                        <textarea
                            ref={exampleInput}
                            placeholder="사용 예시"
                            name="example"
                            type="text"
                            value={state.example}
                            onChange={handleChangeState}
                        />
                    </div>
                </section>
            </div>
            <WordsButton text={"O"} onClick= {handleSubmit} />
            <WordsButton text={"X"} onClick= {() => navigate(-1)} />
        </div>
    );
};

export default New;