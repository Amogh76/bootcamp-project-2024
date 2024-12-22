import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../database/db';
import blogSchema from '../../../database/blogSchema';

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: NextRequest, context: RouteContext) {
  await connectDB();

  try {

    const { slug } = await context.params; 

    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog); 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}
