import PostType from "../types/Post";
import PostThumbnail from './post-thumbnail';

type Props = {
  posts: PostType[];
}

const PostListing = ({
  posts
}: Props) => (
    <ul className="flex flex-col gap-4">
      {posts.map(({ slug, excerpt, date, duration, image, title }) => (
        <li key={slug}>
          <PostThumbnail 
            title={title}
            date={date}
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