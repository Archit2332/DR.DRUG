import React, { useState} from "react";
import diseaseData from "../data.json";

const DiseaseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundDisease, setFoundDisease] = useState(null);

  const fetchDiseaseData = async (diseaseName) => {
    const foundDisease = diseaseData.medicinalData.find(
      (data) => data.diseaseName.toLowerCase() === diseaseName.toLowerCase()
    );
    
    console.log("foundDisease:", foundDisease);
    setFoundDisease(foundDisease);
  };
  
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchDiseaseData(searchTerm);
    }
  };

  return (
<div>
  <main>
  <div className="container">
    <div className="search-box">
      <div className="search-icon"><i className="fa fa-search search-icon"></i></div>
      <form action="" className="search-form" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="Search" id="search" autocomplete="off" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </form>
      <svg classNameName="search-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style={{ enableBackground: 'new 0 0 671 111' }} xmlSpace="preserve">

          <path className="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/>
          <path className="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/>
        </svg>
      <div className="go-icon" onClick={handleSearch} ><i className="fa fa-arrow-right"></i></div>
    </div>

      {foundDisease && (
        <div>
          <div>
            <strong>Disease:</strong> {foundDisease.diseaseName}
          </div>
          <div>
            <strong>Disease Symptoms:</strong> {foundDisease.symptoms.join(",")}
          </div>
          <div>
            <strong>Disease Causes:</strong>
            <div>
              <h4>Causes:</h4>
              <p>{foundDisease.causes.join(", ")}</p>
            </div>
          </div>
          <div>
          <strong>Recommended Medicine:</strong>{" "}
            {foundDisease.recommendedMedicine.join(", ")}
          </div>
        </div>
      )}
        </div>
      </main>
    </div>
  );
};

export default DiseaseSearch;




