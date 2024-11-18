// components/ClientVillageSlider.js

'use client'; // Marks this as a Client Component

import dynamic from 'next/dynamic';

// Dynamically import VillageSlider with SSR disabled
const VillageSlider = dynamic(() => import('./VillageSlider'), {
  ssr: false,
  loading: () => <p>Loading slider...</p>, // Optional: Add a loading state
});

export default function ClientVillageSlider() {
  return <VillageSlider />;
}
