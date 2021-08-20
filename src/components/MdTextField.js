import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import style from "../css/markdown-styles.module.css";
import { FloatingReturnButton } from "../atoms";

const StyledDiv = styled.div`
  line-height: 25px;
`;

const MdTextField = ({ text }) => {
  return (
    <div className="mx-2 my-10 sm:mx-5 lg:mx-10 xl:mx-20 px-2 sm:px-5 xl:px-20 lg:px-10 relative">
      <FloatingReturnButton />
      <div className="bg-brown-400 px-8 pb-10 pt-3 rounded">
        <StyledDiv className={style.reactMarkDown}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </StyledDiv>
      </div>
    </div>
  );
};

export default MdTextField;
