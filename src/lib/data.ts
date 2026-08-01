export interface Sponsor {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  link?: string;
  label?: string; // e.g., "League Sponsor", "Hackathon Sponsor"
}

export interface SponsorSection {
  id: string;
  title: string;
  color: string;
  sponsors: Sponsor[];
  layout: "featured" | "grid" | "small-grid";
}

export interface SponsorCategory {
  title: string;
  sponsors: Sponsor[];
}

export interface SponsorsData {
  platinum: SponsorCategory;
  gold: SponsorCategory;
  silver: SponsorCategory;
  ecosystem: SponsorCategory;
}

export const sponsorsData: SponsorsData = {
  platinum: {
    title: "PLATINUM_TIER",
    sponsors: [
      {
        name: "Major League Hacking",
        src: "/images/sponsors/mlh.png",
        alt: "MLH Logo",
        width: 1000,
        height: 1000,
        label: "League Sponsor",
        description:
          "The global hacker community powering student-led innovation across thousands of institutions.",
      },
    ],
  },
  gold: {
    title: "GOLD_TIER",
    sponsors: [
      {
        name: "n8n",
        src: "/images/sponsors/n8n.png",
        alt: "n8n Logo",
        width: 1000,
        height: 1000,
        label: "Automation Partner",
      },
      {
        name: "Render",
        src: "/images/sponsors/Render.png",
        alt: "Render Logo",
        width: 1000,
        height: 1000,
        label: "Deployment Partner",
      },
      {
        name: "HulChul",
        src: "/images/sponsors/HulChul.png",
        alt: "HulChul Logo",
        width: 1000,
        height: 1000,
        label: "Referral Partner",
      },
      {
        name: "Spotme",
        src: "/images/sponsors/Spotme.png",
        alt: "Spotme Logo",
        width: 1000,
        height: 400,
        label: "Media Partner",
      },
      {
        name: "Red Bull",
        src: "/images/sponsors/Red_Bull.png",
        alt: "Red Bull Logo",
        width: 1000,
        height: 300,
        label: "Refreshment Partner",
      },
      {
        name: "The Atria Foundation",
        src: "/images/sponsors/Atria_Foundation.png",
        alt: "The Atria Foundation Logo",
        width: 1000,
        height: 200,
        label: "Food Partner",
      },
    ],
  },
  silver: {
    title: "SILVER_TIER",
    sponsors: [
      {
        name: "HackCulture",
        src: "/images/sponsors/hackculture.png",
        alt: "HackCulture Logo",
        width: 1000,
        height: 1000,
        label: "HackCulture",
      },
    ],
  },
  ecosystem: {
    title: "ECOSYSTEM_PARTNERS",
    sponsors: [
      {
        name: "AWS SBG",
        src: "/images/sponsors/aws-sbg.png",
        alt: "AWS SBG Logo",
        width: 1000,
        height: 1000,
        label: "Ecosystem Partner",
      },
      {
        name: "OSCode",
        src: "/images/sponsors/oscode.png",
        alt: "OSCode Logo",
        width: 1000,
        height: 1000,
        label: "Ecosystem Partner",
      },
    ],
  },
};
