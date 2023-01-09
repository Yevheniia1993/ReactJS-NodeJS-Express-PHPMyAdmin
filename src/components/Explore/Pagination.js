import React, { useState } from "react";
import SweetPagination from "sweetpagination";
function Items(props) {
  const [currentPageData, setCurrentPageData] = useState([]);
  return (
    <div>
      {currentPageData.map((item, index) => (
        <div key={index}>
          <h3 className="ForH3">{item}</h3>
        </div>
      ))}
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={5}
        getData={props.items}
        navigation={true}
      />
    </div>
  );
}
export default Items;
