import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting started with my blog",
      image: "getting-started-nextjs.png",
      excerpt: 
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-09-19',
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting started with my blog",
      image: "getting-started-nextjs.png",
      excerpt: 
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-09-19',
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting started with my blog",
      image: "getting-started-nextjs.png",
      excerpt: 
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-09-19',
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting started with my blog",
      image: "getting-started-nextjs.png",
      excerpt: 
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-09-19',
    },
  ];
  

function AllPostspage() {
    return <AllPosts posts={DUMMY_POSTS}/>
}

export default AllPostspage;