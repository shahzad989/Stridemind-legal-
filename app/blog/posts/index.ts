import type { BlogPost } from './shared';
import { post as balanceTraining } from './why-balance-training-alone-isnt-enough';
import { post as whatIsDualTask } from './what-is-dual-task-training';
import { post as brainTraining } from './brain-training-off-the-screen';

// Newest first. All three launch posts share a publish date, so array order
// is the tiebreaker; the index page sorts by datePublished before falling
// back to this order, so future posts can be appended anywhere.
export const POSTS: BlogPost[] = [balanceTraining, whatIsDualTask, brainTraining];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function sortedPosts(): BlogPost[] {
  return [...POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}
