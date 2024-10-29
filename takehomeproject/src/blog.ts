type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: string;
};

const blogs: Blog[] = [
  {
      title: "My First Blog Post",
      date: "10/19/24",
      description: "This is the description of my first blog post.",
      image: "HappyFace.jpg",
      imageAlt: "A picture of my first post",
      slug: "my-first-blog-post",
      content: "<p>This is the detailed content of my first blog post.</p>"
  },
  {
      title: "Exploring TypeScript",
      date: "10/20/24",
      description: "Description of my story.",
      image: "snoopy.jpg",
      imageAlt: "A picture of Snoopy",
      slug: "exploring-typescript",
      content: "<p>This is the detailed content of my blog about exploring TypeScript.</p>"
  }
];

const blogContainer = document.getElementById('blog-container');

blogs.forEach(blog => {
  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');

  const blogTitle = document.createElement('h1');
  blogTitle.innerText = blog.title;
  blogPost.appendChild(blogTitle);

  const blogImage = document.createElement('img');
  blogImage.src = blog.image;
  blogImage.alt = blog.imageAlt;
  blogPost.appendChild(blogImage);

  const blogDescription = document.createElement('p');
  blogDescription.innerText = blog.description;
  blogPost.appendChild(blogDescription);

  const blogLink = document.createElement('a');
  blogLink.href = `blogs/${blog.slug}.html`; 
  blogLink.innerText = "Read More";
  blogPost.appendChild(blogLink);
  blogContainer?.appendChild(blogPost);
});



 
  

