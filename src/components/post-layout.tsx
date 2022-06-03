import Image from 'next/image';

type Props = {
    title: string;
    date: string;
    duration: string;
    image: string;
    content: string;
}

const PostLayout = ({
    title,
    date,
    duration,
    image,
    content,
}: Props) => (
    <article className="flex flex-col mt-6 py-2 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-1/2">
        <h1 className="text-2xl text-blue-1 font-bold uppercase">{title}</h1>
        <p className="text-sm text-gray-3 italic">Le { date } - {duration } min de lecture</p>
        <div className="self-center">
            <Image
                priority
                src={`/images/blog/${image}`}
                width={213}
                height={120}
                />
        </div>
        <div className="text-sm pt-3 text-gray-1">{ content }</div>
    </article>
)

export default PostLayout;
