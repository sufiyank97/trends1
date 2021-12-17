import React from 'react';
import * as Comps from './Posts.style';

const posts = props => (
    <Comps.Wrapper>
      {props.posts.map(post => (
        <a
          key={post.socialAccount + Math.floor(Math.random() * 1000000 + 1)}
          style={{ display: 'block' }}
          href={post.postUrl}
        >
          <Comps.Post
            img={`url('${post.postUrlImage}')`}
            alt={post.socialAccount}
          >
            <p>{post.socialAccount}</p>
            <p>{post.socialAccount}</p>
            <div>
              {post.logo ? (
                <img src={post.logo} alt="Social platform logo" />
              ) : null}
              <p>{post.socialEngagement}</p>
            </div>
          </Comps.Post>
        </a>
      ))}
    </Comps.Wrapper>
);

export default posts;
