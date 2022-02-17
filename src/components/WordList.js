import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom";

const WordList = () => {
    // const navigate = useNavigate();
    const mylists = useSelector((state) => state.dictionary.list);

    return (
        <div className="ListStyle">
            {mylists.map((list, index) => {
                return(
                    <div
                        className="ItemStyle"
                        key = {index}
                        // onClick={() => {
                        //     navigate('/word/'+index)
                        // }}
                    >
                        <h5>단어</h5>
                        <div>{list.word}</div>
                        <h5>설명</h5>
                        <div>{list.explain}</div>
                        <h5>예시</h5>
                        <div>{list.example}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default WordList