import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return <main className="text-blue-500 p-10">
    <Button asChild>
      <Link href="/dashboard">Go to Dashboard</Link>
    </Button>
  </main>
}
