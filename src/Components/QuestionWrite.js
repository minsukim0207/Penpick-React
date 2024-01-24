import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

import "../css/questionwrite.css";

function QuestionWrite() {
  const { auth, setAuth } = useContext(AuthContext);
  const { headers, setHeaders } = useContext(HttpHeadersContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  /* [POST /bbs]: 게시글 작성 */
  const createQuestion = async () => {
    const req = {
      title: title,
      content: content,
    };

    await axios
      .post("http://localhost:8282/question/write", req, { headers: headers })
      .then((resp) => {
        console.log("[BbsWrite.js] createBbs() success :D");
        console.log(resp.data);
        const questionNum = resp.data.boardId;
        console.log("questionNum:", questionNum);

        alert("새로운 게시글 등록 성공");
        navigate(`/bbsdetail/${resp.data.questionNum}`); // 새롭게 등록한 글 상세로 이동
      })
      .catch((err) => {
        console.log("[BbsWrite.js] createBbs() error");
        console.log(err);
      });
  };

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 localStorage의 토큰 값으로 headers를 업데이트
    setHeaders({
      Authorization: `Bearer ${localStorage.getItem("bbs_access_token")}`,
    });

    // 로그인한 사용자인지 체크
    if (!auth) {
      alert("로그인 한 사용자만 게시글을 작성할 수 있습니다.");
      navigate(-1);
    }
  }, []);

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th className="table-primary">작성자</th>
            <td>
              <input type="text" className="form-control" value={localStorage.getItem("id")} size="50px" readOnly />
            </td>
          </tr>

          <tr>
            <th className="table-primary">제목</th>
            <td>
              <input type="text" className="form-control" value={title} onChange={changeTitle} size="50px" />
            </td>
          </tr>

          <tr>
            <th className="table-primary">내용</th>
            <td>
              <textarea className="form-control" value={content} onChange={changeContent} rows="10"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-5 d-flex justify-content-center">
        <button className="btn btn-outline-secondary" onClick={createQuestion}>
          <i className="fas fa-pen"></i> 등록하기
        </button>
      </div>
    </div>
  );
}

export default QuestionWrite;
