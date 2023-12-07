import React, { useState } from "react";

const DiseaseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [diseaseData, setDiseaseData] = useState(null);

  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchDiseaseData(searchTerm);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {diseaseData && (
        <div>
          <div>
            <strong>Disease:</strong> {diseaseData.diseaseName}
          </div>
          <div>
            <strong>Disease Symptoms:</strong> {diseaseData.symptoms}
          </div>
          <div>
            <strong>Disease Causes:</strong>
            <div>
              <h4>Causes:</h4>
              <p>{diseaseData.causes}</p>
            </div>
          </div>
          <div>
            <strong>Recommended Medicine:</strong> {diseaseData.medicine}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseaseSearch;
