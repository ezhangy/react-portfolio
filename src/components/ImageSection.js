const ImageSection = ({ data, separate, width}) => (
  <div className="img-section">
    {separate 
      ? data.map((imgData) => (
            <div key={imgData.id} className="img-wrapper" style={{width: width}}> 
              <img src={imgData.path}/>
              {(imgData.caption !== "") ? (<p>{imgData.caption}</p>) : (<></>)}
            </div>     
      ))
      : (
      <div className="img-wrapper" style={{width: width}}> 
        {data.map((imgData) => (
            <>
              <img key={imgData.id} src={imgData.path}/>
              {(imgData.caption !== "") ? (<p>{imgData.caption}</p>) : (<></>)}
            </>
        ))}
      </div>
      )
    }
  </div>
)

export default ImageSection