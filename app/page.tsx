'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TransitionPanel } from '@/components/motion-primitives/transition-panel'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  PUBLICATIONS,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SKILLS,
  OPEN_SOURCE_MODELS,
} from './data'
import { InView } from '@/components/ui/in-view'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null)
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)

  const modelTypePalette = [
    'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200',
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200',
    'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
    'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200',
  ]

  const modelTypeColorMap: Record<string, string> = {}
  OPEN_SOURCE_MODELS.forEach((model) => {
    if (!modelTypeColorMap[model.modelType]) {
      const index = Object.keys(modelTypeColorMap).length % modelTypePalette.length
      modelTypeColorMap[model.modelType] = modelTypePalette[index]
    }
  })

  return (
    <motion.main
      className="space-y-15"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex items-center flex-wrap gap-2 justify-start">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
          I love building and training tiny neural nets (GPU-poor life), across anything from text to vision and audio. 
          Most of my experiments explore making models a bit more human-like, and I write blogs to share what I learn.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work & Education</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4
                        className={`font-normal ${
                          job.tag === 'edu'
                            ? 'text-orange-700 dark:text-orange-300 font-bold'
                            : job.tag === 'present'
                            ? 'text-green-700 dark:text-green-300 font-bold'
                            : 'text-zinc-900 dark:text-zinc-100'
                        }`}
                      >
                        {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {job.start} - {job.end}
                  </p>
                </div>
                <p className=" text-sm text-zinc-500 dark:text-zinc-400">
                      {job.description || ''}
                    </p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Skills</h3>

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {SKILLS.map((group, index) => (
              <button
                key={group.type}
                onClick={() => setActiveSkillIndex(index)}
                className={`rounded-md px-3 py-1 text-sm font-medium ${
                  activeSkillIndex === index
                    ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
                }`}
              >
                {group.type.charAt(0).toUpperCase() + group.type.slice(1)}
              </button>
            ))}
          </div>

          <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
            <TransitionPanel
              activeIndex={activeSkillIndex}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              variants={{
                enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
              }}
            >
              {SKILLS.map((group) => (
                <div key={group.type} className="py-2">
                  {/* <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    {group.type}
                  </h3> */}
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {group.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </TransitionPanel>
          </div>
        </div>
      </motion.section>


      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Publications</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {PUBLICATIONS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400"> These blogs are posted on my Substack. (See my previous Medium articles here <a href="https://medium.com/@teendifferent" target="_blank" rel="noopener noreferrer" className="underline dark:text-zinc-300">@teendifferent</a>)</p>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Open Source Models</h3>
        <InView
          viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          <div className="grid grid-cols-1 gap-5">
            {OPEN_SOURCE_MODELS.map((model) => (
              <motion.div
                key={model.id}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
              >
                <div className="space-y-2">
                  <div className="px-1">
                    <div className="flex items-start justify-between gap-3">
                      <a
                        href={model.link}
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {model.title}
                      </a>
                      <span
                        className={`inline-flex items-center rounded-lg  px-2.5 py-0.5 text-s font-medium ${modelTypeColorMap[model.modelType]}`}
                      >
                        {model.modelType}
                      </span>
                    </div>
                    <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                      {model.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </InView>
      </motion.section>


      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <InView
            viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROJECTS.map((project) => (
                  <motion.div
                  key={project.name}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                   }}
                 >
            <div key={project.name} className="space-y-2">

              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  target="_blank"
                >
                  {project.name}
                  
                </a>
                <div className="flex flex-row justify-start space-x-3">
                {project.code_link && (
                  <a
                    href={project.code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-sky-100 px-2.5 py-0.5 text-s font-medium text-zinc-700 hover:bg-sky-200 dark:bg-sky-900/40 dark:text-sky-200 dark:hover:bg-sky-900/70"
                  >
                    Code
                  </a>
                )}
                {project.read_link && (
                  <a
                    href={project.read_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-amber-100 px-2.5 py-0.5 text-s font-medium text-zinc-700 hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-200 dark:hover:bg-amber-900/70"
                  >
                    Read
                  </a>
                )}
              </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
                
            </div>
            </motion.div>
          ))}
        </div>
        </InView>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center flex-wrap gap-2 justify-start">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
