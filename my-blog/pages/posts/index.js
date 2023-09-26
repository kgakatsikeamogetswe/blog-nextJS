import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from 'react';

function AllPostspage(props) {
    return <Fragment>
      <Head>
        <title>All my post </title>
        <meta name="description" content='A List if related programming toturials' />
      </Head>
      <AllPosts posts={props.posts}/>
      </Fragment>
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