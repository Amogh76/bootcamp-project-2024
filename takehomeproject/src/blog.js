var blogs = [
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
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    var blogTitle = document.createElement('h1');
    blogTitle.innerText = blog.title;
    blogPost.appendChild(blogTitle);
    var blogImage = document.createElement('img');
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogPost.appendChild(blogImage);
    var blogDescription = document.createElement('p');
    blogDescription.innerText = blog.description;
    blogPost.appendChild(blogDescription);
    var blogLink = document.createElement('a');
    blogLink.href = "blogs/".concat(blog.slug, ".html");
    blogLink.innerText = "Read More";
    blogPost.appendChild(blogLink);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPost);

    <script src="src-blog.js"></script>
});
