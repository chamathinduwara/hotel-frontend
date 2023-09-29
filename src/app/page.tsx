import Destinations from "@/components/destinations/Destinations";
import New from "@/components/new/New";
import { Offers } from "@/components/offers/Offers";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Destinations />
      <New />
      <Offers />
    </main>
  );
}
