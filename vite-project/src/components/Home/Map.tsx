import React from 'react';
import NepalMap from './LeafletMap';

const Map: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 md:bg-gray-100 md:min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Explore Nepal
      </h1>

      {/* Map Container */}
      <div className="w-full max-w-5xl h-[40vh] md:h-[75vh] lg:h-[80vh] border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <NepalMap />
      </div>

      {/* Legend or Footer */}
      <div className="mt-4 text-sm text-gray-600">
        Data source: OpenStreetMap contributors
      </div>
    </div>
  );
};

export default Map;
