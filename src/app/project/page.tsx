"use client";

import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

export default function Project() {
  const { t } = useLang();

  const projects = [
    { title: "Are You Okay?", descKey: "dapp.ruokDesc", url: "https://ruok3.vercel.app/", github: "https://github.com/summertoo/ruok" },
    { title: "Mini Soccer", descKey: "game.miniSoccerDesc", url: "https://soccerdemo.edgeone.app/" },
    { title: "Sui Write3", descKey: "dapp.write3Desc", github: "https://github.com/etboodXJ/SuiWrite3", comingSoon: true },
    { title: "Hand Battle", descKey: "game.handBattleDesc", url: "https://handbattle.etboodonline.com/" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />
      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("project.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("project.subtitle")}</p>
      </section>
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Card key={i} className="cyber-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
                <p className="mb-4">{t(p.descKey)}</p>
                <div className="flex space-x-2">
                  {p.url && !p.comingSoon && <a href={p.url} target="_blank" rel="noopener noreferrer"><Button className="cyber-button-small">{t("dapps.visit")}</Button></a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer"><Button className="cyber-button-small">{t("dapps.github")}</Button></a>}
                  {p.comingSoon && !p.url && <Button className="cyber-button-small" disabled>{t("project.comingSoon")}</Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
