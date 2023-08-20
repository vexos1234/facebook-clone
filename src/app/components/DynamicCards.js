import dynamic from 'next/dynamic';

const DynamicCards = dynamic(() => import('./Cards'), { ssr: false });

export default DynamicCards;