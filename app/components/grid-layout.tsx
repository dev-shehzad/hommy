'use client'
import { useEffect, useState } from 'react';
import { getHouseData } from '@/sanity/lib/getHouseData';

export default function GridLayout() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHouseData().then((res) => setData(res[0]));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4 min-h-screen">
        {/* Large Image Top Left */}
        <div className="col-span-2 bg-white rounded-lg overflow-hidden relative">
          <img src={data.images[0]} alt="Feature" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white w-full h-full m-4"></div>
          </div>
        </div>

        {/* Small Image Top Right */}
        <div className="bg-white rounded-lg overflow-hidden relative">
          <img src={data.images[1]} alt="Feature" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white w-full h-full m-4"></div>
          </div>
        </div>

        {/* Small Image Left Middle */}
        <div className="bg-white rounded-lg overflow-hidden relative">
          <img src={data.images[2]} alt="Feature" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white w-full h-full m-4"></div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </div>

        {/* Medium Image Right Middle */}
        <div className="bg-white rounded-lg overflow-hidden relative">
          <img src={data.images[3]} alt="Feature" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white w-full h-full m-4"></div>
          </div>
        </div>

        {/* Two Medium Images Bottom */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-lg overflow-hidden relative">
            <img src={data.images[4]} alt="Feature" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-2 border-white w-full h-full m-4"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden relative">
            <img src={data.images[5]} alt="Feature" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-2 border-white w-full h-full m-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
