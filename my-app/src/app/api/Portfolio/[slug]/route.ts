import { NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Project from "@/app/database/portfolioSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: Request, { params }: IParams) {
  await connectDB();

  const { slug } = params;

  try {
    const project = await Project.findOne({ slug }).orFail();
    return NextResponse.json(project);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}