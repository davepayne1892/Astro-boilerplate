import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const readableDate = (post: MarkdownInstance<IFrontmatter>) => {
  return new Date(post.frontmatter.pubDate.valueOf()).toLocaleDateString(
    'en-GB',
    {
      year: 'numeric',
      month: 'long',
    }
  );
};

export const getMostRecentPostDate = (
  posts: MarkdownInstance<IFrontmatter>[]
): string | undefined => {
  const sortedPosts = sortByDate(posts);
  return sortedPosts.length > 0
    ? sortedPosts[0]?.frontmatter.pubDate
    : undefined;
};
