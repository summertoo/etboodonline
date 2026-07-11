import HomeClient from "@/app/HomeClient";
import { latestNewsList } from "@/data/news";

export default function HomePage() {
  return <HomeClient latestNewsList={latestNewsList} />;
}
