import './index.css';

const CutCornerButton = ({ text }) => {

  return (
    <>
      <button id="cut-corner-button">{text}</button>
      {/* <button style="--color:#f3738a;--border:2px;--slant:.5em">Button</button>
      <button style="--color:#69db3a;--slant:40px;--border:8px">Button</button> */}
    </>
  )
}

export default CutCornerButton;