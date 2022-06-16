import tw from 'tailwind-styled-components';
import PostThumbnail from './post-thumbnail';

const Section = tw.section`my-4`
const Title = tw.h2`text-2xl pb-2 mb-2 text-blue-1 font-bold uppercase relative after:absolute after:z-[-1] after:content[''] after:shadow-md after:bg-blue-2/20 after:rounded-l-lg after:left-[-0.25rem] after:right-[-2.25rem] after:top-0 after:bottom-0`

type Props = {
    title: string;
    date: string;
    duration: string;
    image: string;
    excerpt: string;
    slug: string;
}

const SuggestedPost = ({
    title,
    date,
    duration,
    image,
    excerpt,
    slug,
}: Props) => (
    <Section>
        <Title>Cet article pourrait vous plaire</Title>
        <PostThumbnail
            title={title}
            date={date}
            duration={duration}
            image={image}
            excerpt={excerpt}
            slug={slug}
        />
    </Section>
)

export default SuggestedPost;
