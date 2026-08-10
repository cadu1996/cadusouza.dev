import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort(
    (left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  );
}

export async function getPublishedProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  return projects.sort(
    (left, right) => Number(right.data.featured) - Number(left.data.featured),
  );
}