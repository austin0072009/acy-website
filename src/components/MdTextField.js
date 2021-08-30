import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import style from "../css/markdown-styles.module.css";
import { FloatingReturnButton } from "../atoms";

const StyledDiv = styled.div`
  line-height: 30px;
`;

const MdTextField = ({ text, title }) => {
  return (
    <div className="mx-2 py-12 sm:mx-5 lg:mx-10 xl:mx-20 px-2 sm:px-5 xl:px-20 lg:px-10 relative">
      <FloatingReturnButton />
      <div className="px-8 pb-10 pt-3 rounded">
        <div className="text-orange text-5xl mb-10">{title}</div>
        <StyledDiv className={style.reactMarkDown}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </StyledDiv>
      </div>
    </div>
  );
};

export default MdTextField;
