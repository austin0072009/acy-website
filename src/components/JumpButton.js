import "./JumpButton.css"




const JumpButton = (props)=> {

  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };


return(
  <div id="container">
  <button class="learn-more" id = "button" onClick = { () => {
    openInNewTab(props.links);
  }}>
    <span class="circle" aria-hidden="true">
      <span class="icon jumparrow"></span>
    </span>
    <span class="button-text">{props.text}</span>
  </button>
</div>
)

}



export default JumpButton;