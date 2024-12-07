import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../database/db';  
import blogSchema from '../../../database/blogSchema'; 

type IParams = {
  params: {
    slug: string;
  }
}

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();  // Function from db.ts
  
  const { slug } = params;  // Destructure the slug

  try {
    // Attempt to find a blog with the specified slug
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}
