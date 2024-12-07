import mongoose, { Schema } from "mongoose";

// TypeScript type (can also be an interface)
type Portfolio = {
  name: string; // Project name
  description: string; // Short description for preview
  image: string; // URL or path to the image in public
  image_alt: string; // Alt text for the image
  link: string; // URL to learn more about the project
};

// Mongoose schema
const portfolioSchema = new Schema<Portfolio>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: true },
});

// Defining the collection and model
const Portfolio =
  mongoose.models["portfolio"] || mongoose.model("portfolio", portfolioSchema);

export default Portfolio;
