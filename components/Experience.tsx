import React from "react";

import Image from "next/image";

const Experience = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <section className="container mx-auto px-5 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
         {/* Image Section */}
<div className="w-full flex justify-center">
    <Image
      src="/exp.jpeg"
      alt="Experience"
      width={800} // actual image width
      height={420} // actual image height
      className="w-[85%] max-h-[420px] object-cover rounded-xl shadow-lg"
      priority // use this if above-the-fold
      sizes="(max-width: 768px) 100vw, 800px"
    />
</div>


          {/* Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="sm:text-4xl text-3xl font-semibold mb-6 text-black dark:text-white transition-colors duration-300">
              Experience in Full Stack Development
            </h1>

            <p className="leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Hi there! I’m <strong>Shobhit Rastogi</strong>, a results-driven{" "}
              <strong>Full-Stack Developer</strong> with{" "}
              <strong>1.5+ years of professional experience</strong> at{" "}
              <strong>Kiyaan Software Solutions</strong>. I specialize in crafting{" "}
              <strong>scalable, secure, and high-performance applications</strong>{" "}
              using modern development practices and clean architecture. My core
              tech stack includes{" "}
              <strong>
                MongoDB, MySQL, PostgreSQL, Node.js, Express.js, Python, FastAPI,
                React, Next.js, and JavaScript
              </strong>
              . I have hands-on experience in building{" "}
              <strong>microservices-based architectures</strong>, designing
              robust <strong>RESTful APIs</strong>, and implementing
              enterprise-grade <strong>authentication and authorization</strong>{" "}
              systems. I’m well-versed in{" "}
              <strong>Docker, Kubernetes, and AWS</strong>, enabling seamless
              cloud deployments and production-ready solutions. I’m passionate
              about problem-solving, performance optimization, and continuously
              evolving with new technologies to deliver impactful digital
              experiences.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Experience;
