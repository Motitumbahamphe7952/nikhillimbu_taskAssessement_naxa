// src/components/Map.tsx
import React from 'react';
import NepalMap from './LeafletMap';

const Map: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Explore Nepal
      </h1>

      <div className="w-full max-w-5xl">
        <div className="
          w-full
          h-64        
          sm:h-80     
          md:h-[60vh] 
          lg:h-[75vh]  
          rounded-lg overflow-hidden shadow-md
        ">
          <NepalMap />
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Data source: OpenStreetMap contributors
      </div>
    </div>
  );
};

export default Map;
