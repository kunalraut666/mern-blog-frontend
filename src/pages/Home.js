import React from 'react';

export default function Home() {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-grey-900">
        Welcome to
      </h1>
      <h4 className="sm:text-2xl text-2xl font-bold my-6 text-grey-900 ">
        The Code Corner by Kunal Raut
      </h4>

      <p className="mx-auto leading-relaxed text-base mb-8">
        Welcome to our corner of the internet where we dive deep into the world
        of technology, sharing insights, tutorials, and our experiences along
        the way. Whether you're a seasoned developer or just starting out on
        your coding journey, we're here to inspire, educate, and connect with
        you.
      </p>

      <p className="mx-auto leading-relaxed text-base mb-8">
        At <strong>The Code Corner</strong>, we're passionate about all things
        tech, from Python to React, Drupal to DevOps, and everything in between.
        Our mission is to provide valuable content that empowers you to enhance
        your skills, tackle challenges, and stay updated on the latest trends in
        the ever-evolving tech landscape.
      </p>

      <p className="mx-auto leading-relaxed text-base mb-4">
        Expect to find a diverse range of topics covered here, including:
      </p>
      <ul className="list-disc ml-4 mb-8">
        <li>
          In-depth tutorials and guides on Python programming, React
          development, and Drupal customization.
        </li>
        <li>
          Insights into industry best practices, tips, and tricks to optimize
          your workflow.
        </li>
        <li>
          Thought-provoking articles exploring the intersection of technology
          with society, culture, and beyond.
        </li>
        <li>
          Interviews with experts, showcasing their journey, insights, and
          advice for aspiring technologists.
        </li>
        <li>And much more!</li>
      </ul>

      <p className='mx-auto leading-relaxed text-base mb-3'>
        Join us on this exciting journey as we explore the limitless
        possibilities of technology together. Whether you're here to learn,
        share, or simply geek out over code, we're thrilled to have you as part
        of our community.
      </p>

      <p className='mx-auto leading-relaxed text-base'>
        So, grab your favorite beverage, get comfy, and let's embark on this
        adventure together. Happy coding!
      </p>
    </div>
  );
}
