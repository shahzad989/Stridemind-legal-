import type { BlogPost } from './shared';
import { post as whyOlderAdultsFall } from './why-do-older-adults-fall';
import { post as helpAParent } from './help-a-parent-lower-fall-risk';
import { post as balanceTraining } from './why-balance-training-alone-isnt-enough';
import { post as whatIsDualTask } from './what-is-dual-task-training';
import { post as brainTraining } from './brain-training-off-the-screen';

// Newest first. Posts sharing a publish date fall back to array order (the
// index page sorts by datePublished first), so future posts can be appended
// anywhere.
export const POSTS: BlogPost[] = [
  whyOlderAdultsFall,
  helpAParent,
  balanceTraining,
  whatIsDualTask,
  brainTraining,
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function sortedPosts(): BlogPost[] {
  return [...POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}
