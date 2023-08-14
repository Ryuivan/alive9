const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          <img src={clickedImg} alt="bigger pic" />
          <span className="dismiss" onClick={handleClick}>
            X
          </span>
          <div onClick={handelRotationLeft} className="overlay-arrows_left">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"/></svg>
            </div>
          </div>
          <div onClick={handelRotationRight} className="overlay-arrows_right">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/></svg>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;