import Destinations from "@/components/destinations/Destinations";
import New from "@/components/new/New";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Destinations />
      <New/>
    </main>
  );
}
