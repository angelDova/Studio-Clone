"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="mt-24 rounded-xl bg-neutral-950 py-20 sm:mt-32 sm:py-32"
      ref={ref}
    >
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-2xl font-semibold">
            <span className="text-slate-500">Featured Projects</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;

const items = [
  {
    id: 1,
    url: "/images/1.jpg",
    category: "Project 1",
    title: "Belladonna’s Playground",
    description:
      "Exploring the transitional period of girlhood into womanhood.",
  },
  {
    id: 2,
    url: "/images/2.jpg",
    category: "Project 2",
    title: "La Lucha",
    description: "A feminine play on a traditionally masculine role.",
  },
  {
    id: 3,
    url: "/images/3.jpg",
    category: "Project 3",
    title: "USER827305883500 ",
    description:
      "Takes inspiration from the experimental electronica wave of the 2010’s. ",
  },
  {
    id: 4,
    url: "/images/4.jpg",
    category: "Project 4",
    title: "Untitled",
    description: "Experimenting with my own personal style.",
  },
  {
    id: 5,
    url: "/images/5.jpg",
    category: "Project 5",
    title: "Untitled",
    description: "Experimenting with my own personal style.",
  },
];
