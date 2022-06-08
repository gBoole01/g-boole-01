---
title: 'My First Article'
publicationDate: '2022-05-18'
modificationDate: '2022-05-18'
duration: '1'
image: 'test-post.png'
excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p'
---
## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

**This is bold text**

_This is italic text_

## Blockquotes

> Develop. Preview. Ship. – Vercel

## Lists

Unordered

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code

Inline `code`

```jsx
const PostLayout = ({
    title,
    date,
    duration,
    image,
    content,
}: Props) => (
    <article className="flex flex-col mt-6 py-2 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-1/2">
        <h1 className="text-2xl text-blue-1 font-bold uppercase">{title}</h1>
        <p className="text-gray-3 italic">Le { date } - {duration } min de lecture</p>
        <div className="self-center">
            <Image
                priority
                src={`/images/blog/${image}`}
                width={213}
                height={120}
                />
        </div>
        <div 
            className={markdownStyles.markdown}
            dangerouslySetInnerHTML={{ __html: content}}
        />
    </article>
)
```
## Links

- [Next.js](https://nextjs.org)
- [Vercel](http://vercel.com)
