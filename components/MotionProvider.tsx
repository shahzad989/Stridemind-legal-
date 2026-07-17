'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

// reducedMotion="user" makes every framer-motion component on the site respect
// the OS-level "Reduce Motion" setting: transform/layout animations are
// dropped while opacity fades remain, so nothing moves for users who asked
// for that. The 55+ audience enables Reduce Motion far more often than
// average, and vestibular sensitivity rises with age, so this is a hard
// requirement rather than a nicety.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
