import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import style from "../css/markdown-styles.module.css";
import { FloatingReturnButton } from "../atoms";

const StyledDiv = styled.div`
  line-height: 30px;
`;

const MdTextField = ({ text, title }) => {
  return (
    <div className="relative px-4 sm:px-10 xl:px-24 lg:px-20">
      <div className="p-2 md:p-10 lg:p-20 rounded">
        <div className="flex justify-between items-center">
          <div className="text-orange text-4xl md:text-5xl my-1 md:my-10">
            {title}
          </div>

          <FloatingReturnButton />
        </div>
        <StyledDiv className={style.reactMarkDown}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </StyledDiv>
      </div>
    </div>
  );
};

export default MdTextField;
