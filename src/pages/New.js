import MyButton from "../components/MyButton";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWordsFB } from "../redux/modules/Dictionary";

const New = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        word: "",
        explain: "",
        example: "",
    });

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
        dispatch(
            addWordsFB({
                word: wordInput.current.value,
                explain: explainInput.current.value,
                example: exampleInput.current.value
            })
        );
        // alert("추가 완료");
        // setState({
        //     word: "",
        //     explain: "",
        //     example: "",
        // });
        navigate('/', {replace:true});
    };

    return (
        <div className="NewWord">
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
            <MyButton text={"O"} onClick= {handleSubmit} />
            <MyButton text={"X"} onClick= {() => navigate("/")} />
        </div>
    );
};

export default New;