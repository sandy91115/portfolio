import { HeroScrub } from "@/components/ui/hero-scrub";

export type SandeepHeroProps = {
  accentHex?: string;
};

export default function Demo({ accentHex = "#00f2fe" }: SandeepHeroProps) {
  return (
    <HeroScrub
      useTech3D={true}
      titleTop="SANDEEP"
      titleBottom="CHAUDHARY"
      accentHex={accentHex}
    />
  );
}
