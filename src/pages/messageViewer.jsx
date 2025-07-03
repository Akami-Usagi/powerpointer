import styled from "styled-components";

const BackgoundVideo = styled.video`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    filter: brightness(60%);
`


const AvanzandoLogo = styled.img`
  width: 900px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  
`


const MessageViewer = () => {
  

  return (
    <div>
    <BackgoundVideo autoPlay loop muted playsInline>
            <source src="video/background.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5
    </BackgoundVideo>
    
    <AvanzandoLogo src="images/logo.png"/>
    
        
      
    
    </div>
  );
};

export default MessageViewer;