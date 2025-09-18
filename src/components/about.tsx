'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I am Srinjoy Mahanti, an Information Technology undergraduate with a 
          solid foundation in computer science and practical experience in software 
          development, algorithms, and problem-solving. Skilled in C, C++, Python, and 
          JavaScript, I also work with modern frameworks like React and Next.js. My academic 
          interests span compiler design, operating systems, cryptography, automata theory, 
          and data science, strengthening my analytical and research skills. Beyond academics, 
          I engage in competitive programming, project development, and open-source contributions. 
          Passionate about bridging theory with practice, I aim to grow as a developer and 
          researcher, driving innovation in software engineering, machine learning, and emerging technologies.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
