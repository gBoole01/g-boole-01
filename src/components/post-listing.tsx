import PostType from "../types/Post";
import PostThumbnail from './post-thumbnail';

type Props = {
  posts: PostType[];
}

const PostListing = ({
  posts
}: Props) => (
    <ul className="flex flex-col gap-4">
      {posts.map(({ slug, excerpt, publicationDate, duration, image, title }) => (
        <li key={slug}>
          <PostThumbnail 
            title={title}
            date={publicationDate}
            duration={duration}
            image={image}
            excerpt={excerpt}
            slug={slug}
          />
        </li>
      ))}
    </ul>
  )

export default PostListing