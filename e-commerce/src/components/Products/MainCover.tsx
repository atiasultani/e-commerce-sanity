'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

// Fetch Function
export const fetchMainCoverData = async () => {
  return await client.fetch(
    `*[_type == "mainCover"] {
      _id,
      heading,
      paragraph,
      buttonText,
      "imageUrl": Image.asset->url
    }`
  );
};

const MainCover = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMainCoverData()
      .then((result) => setData(result[0])) // Assuming you want the first document
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!data) return <div className="text-center py-16">No data available</div>;

  const { heading, paragraph, buttonText, imageUrl } = data;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-zinc-100 py-16 px-8 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="md:w-1/2 text-left mb-8 md:mb-0">
        {heading && <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>}
        {paragraph && <p className="text-gray-700 text-lg md:text-xl mb-6">{paragraph}</p>}
        {buttonText && (
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-blue-700">
            {buttonText}
          </button>
        )}
      </div>

      {/* Image */}
      {imageUrl && (
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={heading || 'Cover Image'}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      )}
</div>

  );
};

export default MainCover;
