"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";
import { useSectionInView } from "@/hooks/use-section-in-view";

export const Intro = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      {/* "Available for work" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex size-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&apos;m{" "}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Srinjoy Mahanti
        </span>
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl"
      >
        A software developer with a passion for creating seamless digital
        experiences. I specialize in building robust applications that solve
        real-world problems. Let&apos;s connect and create something impactful
        together.
      </motion.p>

      {/* Action Buttons & Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/SrinjoyMahanti_CV.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/srinjoy-mahanti-6168b5306/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/srinjoymahanti"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.instagram.com/srinjoymahanti/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.instagram className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
