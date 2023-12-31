"use client";

import { motion } from "framer-motion";

import { serviceIcons } from "@/constants";
import Service from "./Service";
import { generateFadeInAnimationVariants } from "@/utils";

const Services = () => {
  const fadeInAnimationVariantsForServices =
    generateFadeInAnimationVariants(0.2);

  return (
    <>
      {serviceIcons.map((serviceIcon, index) => (
        <motion.li
          className="list-none"
          variants={fadeInAnimationVariantsForServices}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          key={serviceIcon.name}
        >
          <Service ServiceIcon={serviceIcon} index={index} />
        </motion.li>
      ))}
    </>
  );
};

export default Services;
