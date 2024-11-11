import RYTUDetails from '@/components/rytu/rytu-details';
import { nftData } from '@/data/static/single-nft';

export default function RytuDetailsPage() {
  return <RYTUDetails product={nftData} />;
}
