import { StrategyDeck } from "@/components/deck/strategy-deck";
import { getDeckContent } from "@/lib/presentation/content";

export default async function StrategyPage() {
  const deck = await getDeckContent();

  return <StrategyDeck deck={deck} />;
}
