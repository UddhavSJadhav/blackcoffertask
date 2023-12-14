import React, { useState, useEffect, useRef } from "react";

import { axiosOpen } from "../utils/axios";

import D3Chart from "./D3Chart";
import GroupedBar from "./GroupedBar";
import CustomSelect from "./custom/CustomSelect";

type Filters = {
  end_year?: string[];
  topics?: string[];
  sectors?: string[];
  regions?: string[];
  PEST?: string[];
  sources?: string[];
  swot?: string[];
  countries?: string[];
};

const TestChart: React.FC = () => {
  const [data, setData] = useState<object[]>([]);
  const [filters, setFilters] = useState<Filters>({});
  const [filter, setFilter] = useState<boolean>(true);

  const end_year_ref = useRef<HTMLSelectElement>(null);
  const topic_ref = useRef<HTMLSelectElement>(null);
  const sector_ref = useRef<HTMLSelectElement>(null);
  const region_ref = useRef<HTMLSelectElement>(null);
  const pestle_ref = useRef<HTMLSelectElement>(null);
  const source_ref = useRef<HTMLSelectElement>(null);
  const country_ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          await axiosOpen.get("/data", {
            params: {
              end_year: end_year_ref.current?.value,
              topic: topic_ref.current?.value,
              sector: sector_ref.current?.value,
              region: region_ref.current?.value,
              pestle: pestle_ref.current?.value,
              source: source_ref.current?.value,
              country: country_ref.current?.value,
            },
          }),
          await axiosOpen.get("/data/filters"),
        ]);
        setData(response[0].data);
        setFilters(response[1].data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <>
      <h1>D3 Chart Example</h1>
      <div className="row">
        <div className="col-md-1">
          <CustomSelect
            label="End Year"
            ref={end_year_ref}
            options={filters?.end_year || []}
          />
        </div>
        <div className="col-md-2">
          <CustomSelect
            label="Topic"
            ref={topic_ref}
            options={filters?.topics || []}
          />
        </div>
        <div className="col-md-2">
          <CustomSelect
            label="Sector"
            ref={sector_ref}
            options={filters?.sectors || []}
          />
        </div>
        <div className="col-md-2">
          <CustomSelect
            label="Region"
            ref={region_ref}
            options={filters?.regions || []}
          />
        </div>
        <div className="col-md-2">
          <CustomSelect
            label="PEST"
            ref={pestle_ref}
            options={filters?.PEST || []}
          />
        </div>
        <div className="col-md-2">
          <CustomSelect
            label="Source"
            ref={source_ref}
            options={filters?.sources || []}
          />
        </div>
        <div className="col-md-2">
          <CustomSelect label="SWOT" options={filters?.swot || []} />
        </div>
        <div className="col-md-2">
          <CustomSelect
            label="Country"
            ref={country_ref}
            options={filters?.countries || []}
          />
        </div>
        <div>
          <button
            className="btn btn-sm btn-info"
            onClick={() => setFilter((prev) => !prev)}
          >
            Filter
          </button>
        </div>
      </div>
      <GroupedBar data={data} />
      <D3Chart data={data} />
    </>
  );
};

export default TestChart;
