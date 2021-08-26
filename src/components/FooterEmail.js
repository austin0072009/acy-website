import submit from "../assets/arrow_submit.png";
import hsubmit from "../assets/arrow_submit_hover.png";
import styled from "styled-components";
import style from "../css/animation.css";
import { useState } from "react";

const StyledInput = styled.input`
  font-size: 24px;
  background-color: inherit;
  color: white;
  width: 90%;
  border-width: 1px;
  line-height: 50px;
  border-right: 0px solid transparent;
  border-top: 0px solid transparent;
  border-left: 0px solid transparent;
  &:focus {
    outline-width: 0;
    filter: brightness(2);
  }
`;

const FooterEmail = () => {
  let [active, setActive] = useState(false);
  return (
    <div className="flex-col w-full">
      <div className="flex flex-row gap-x-3 items-center justify-start">
        <div className="flex flex-col sm:flex-row">
          <div>
            <StyledInput placeholder="Name"></StyledInput>
          </div>
          <div>
            <StyledInput placeholder="Email Address"></StyledInput>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
        >
          <img
            src={active ? hsubmit : submit}
            alt="submit"
            className="moveLROnHover cursor-pointer"
            style={{ maxWidth: 40 }}
          />
        </div>
      </div>
      <div className="my-4" style={{ color: "#757579" }}>
        Subscribe to our blog for project and ecosystem updates
      </div>
    </div>
  );
};

export default FooterEmail;
