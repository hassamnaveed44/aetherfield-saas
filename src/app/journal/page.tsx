import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import JournalHeader from "@/components/sections/JournalHeader";
import LatestArticles from "@/components/sections/LatestArticles";
import Subscribe from "@/components/sections/Subscribe";

export const metadata: Metadata = {
  title: "Journal — Aetherfield",
  description: "Insights, data, and stories from the Aetherfield team.",
};

export default function JournalPage() {
  return (
    <>
      <Navbar background="white" />
      <JournalHeader />
      <LatestArticles />
      <Subscribe />
    </>
  );
}
