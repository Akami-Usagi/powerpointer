import styled from "styled-components";

const BackgoundVideo = styled.video`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    
`


const MessageViewer = () => {
  

  return (
    <div>
    <BackgoundVideo autoPlay loop muted playsInline>
            <source src="video/background.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5
    </BackgoundVideo>
    
    
    
        
      
    
    </div>
  );
};

export default MessageViewer;