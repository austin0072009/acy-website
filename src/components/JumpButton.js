import "./JumpButton.css"




const JumpButton = (props)=> {

  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };


return(
    <div id="jumpbutton-container" onClick=   { ()=> {openInNewTab(props.links)} 

    } >
  <button class="learn-more jumpbutton">
    <span class="jumpcircle" aria-hidden="true">
      <span class="jumpicon jumparrow"></span>
    </span>
    <span class="jumpbutton-text">Learn More</span>
  </button>
</div>
)

}



export default JumpButton;