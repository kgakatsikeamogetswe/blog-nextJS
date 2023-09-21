import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

function AllPostspage(props) {
    return <AllPosts posts={props.posts}/>
}

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostspage;