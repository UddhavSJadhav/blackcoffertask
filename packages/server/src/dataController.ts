import { Request, Response } from "express";
import { DataModel, Data } from "./dataModel.js";

export const getData = async (req: Request, res: Response): Promise<void> => {
  try {
    let obj: any = {};

    // Filters
    const { end_year, topic, sector, region, pestle, source, country } =
      req.query;

    if (end_year) obj.end_year = Number(end_year);
    if (topic) obj.topic = topic as string;
    if (sector) obj.sector = sector as string;
    if (region) obj.region = region as string;
    if (pestle) obj.pestle = pestle as string;
    if (source) obj.source = source as string;
    if (country) obj.country = country as string;

    // Response
    const data: Data[] = await DataModel.find(obj).limit(50).exec();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const getAllFilters = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const end_year = await DataModel.distinct("end_year", {
      end_year: { $ne: "" },
    });

    const topics = await DataModel.distinct("topic", { topic: { $ne: "" } });
    const sectors = await DataModel.distinct("sector", { sector: { $ne: "" } });
    const regions = await DataModel.distinct("region", { region: { $ne: "" } });
    const PEST = await DataModel.distinct("pestle", { pestle: { $ne: "" } });
    const sources = await DataModel.distinct("source", { source: { $ne: "" } });
    const swot = await DataModel.distinct("swot");
    const countries = await DataModel.distinct("country", {
      country: { $ne: "" },
    });

    res.status(200).json({
      end_year,
      topics,
      sectors,
      regions,
      PEST,
      sources,
      swot,
      countries,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
