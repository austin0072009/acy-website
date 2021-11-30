// import "./btn.css"


const StartedButton = () => {


    const openInNewTab = url => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };



    return(
        

        <div className="flex flex-row" onClick={() => {
            openInNewTab("https://test.acy.finance/");
        }}>
            <a  className="btn btn-sm animated-button thar-three">GET STARTED
            
            <svg class="arrow arrow--right" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24h-24z" fill="none"/><path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z"/></svg>

            </a>
            

        
     
        </div>

       

    );










}

export default StartedButton;