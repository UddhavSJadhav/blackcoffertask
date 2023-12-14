import { Schema, model } from "mongoose";

export type Data = {
  end_year?: number;
  intensity?: number;
  sector?: string;
  topic?: string;
  insight?: string;
  url?: string;
  region?: string;
  start_year?: string;
  impact?: string;
  added?: string;
  published?: string;
  country?: string;
  relevance?: number;
  pestle?: string;
  source?: string;
  title?: string;
  likelihood?: number;
};

const DataSchema = new Schema<Data>({
  end_year: { type: Number },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  impact: { type: String },
  added: { type: String },
  published: { type: String },
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number },
});

export const DataModel = model<Data>("Data", DataSchema);
