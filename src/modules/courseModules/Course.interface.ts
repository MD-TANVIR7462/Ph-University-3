import { Types } from "mongoose";
export type Tags = {
  name: string;
  isDeleted?: boolean;
};
export type TDetails = {
  level: "Beginner"| "Intermediate" | "Advanced";
  description: string;
};

export type TCourse = {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId;
  price: number;
  tags: Tags[];
  startDate: string;
  endDate: string;
  durationInWeeks?: number
  language: string;
  provider: string;
  details: TDetails;
  averageRating:number
  reviewCount:number
};

