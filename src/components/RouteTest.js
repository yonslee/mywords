import { Link } from "react-router-dom";

const RouteTest = () => {
    return (
        <>
            <Link to={'/'}>홈으로</Link>
            <br />
            <Link to={'/new'}>새 단어 작성</Link>
            <br />
            <Link to={'/edit'}>단어 수정</Link>
        </>
    );
};

export default RouteTest;