import submit from "../assets/arrow_submit.png";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 24px;
  background-color: inherit;
  width: 90%;
  border-right: 0px solid transparent;
  &:focus {
    outline-width: 0;
    filter: brightness(2);
  }
`;

const FooterEmail = () => {
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
        <div>
          <img src={submit} alt="submit" style={{ maxWidth: 40 }} />
        </div>
      </div>
      <div className="my-4" style={{ color: "#757579" }}>
        Subscribe to our blog for project and ecosystem updates
      </div>
    </div>
  );
};

export default FooterEmail;
