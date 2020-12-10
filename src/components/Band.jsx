import React  from "react";
import { AddBand } from "./AddBand";
import { BandChart } from "./BandChart";
import { BandList } from "./BandList";


export const Brand = () => {
 
  return (
    <div>
      <h1 className="mt-5">BandNames</h1>
      <hr />
      <div className="row">
        <div className="col-12">
            <BandChart />
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <BandList
          />
        </div>
        <div className="col-4">
          <AddBand  />
        </div>
      </div>
    </div>
  );
};
