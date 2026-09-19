export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  code: string;
  name: string;
  blurb: string;
  cover: string;
  views: string[];
  specs: Spec[];
  pdf: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "kf-6516",
    code: "KF-CORE",
    name: "KANEK CORE™",
    blurb:
      "Intelligence inside the beam. Each structural component carries a secure digital identity and communicates position, connections, structural status, and environment to the building network.",
    cover: "/images/catalog/kf-6516-a.jpg",
    views: [
      "/images/catalog/kf-6516-a.jpg",
      "/images/catalog/kf-6516-b.jpg",
      "/images/catalog/kf-6516-c.jpg",
      "/images/catalog/kf-6516-d.jpg",
    ],
    specs: [
      { label: "Identity", value: "Per-node cryptographic ID" },
      { label: "Telemetry", value: "Position · status · environment" },
      { label: "Architecture", value: "Embedded Core™" },
      { label: "Trust", value: "Zero-trust node" },
    ],
    pdf: "/docs/kf-6516.txt",
  },
  {
    slug: "kf-312",
    code: "KF-WIRE",
    name: "DIGITAL WIREFRAME™",
    blurb:
      "A living digital replica of the building. As Kanek Frames are assembled, their digital counterparts assemble with them — synchronized through construction and operation.",
    cover: "/images/work/hangar.jpg",
    views: [
      "/images/work/hangar.jpg",
      "/images/shop-truss.jpg",
      "/images/catalog-dusk.jpg",
      "/images/truss.jpg",
    ],
    specs: [
      { label: "Replica", value: "Continuous Digital Wireframe™" },
      { label: "Sync", value: "Construction → operation" },
      { label: "Scope", value: "Beam · floor · zone · system" },
      { label: "Output", value: "Twin-ready" },
    ],
    pdf: "/docs/kf-312.txt",
  },
  {
    slug: "kf-m42",
    code: "KF-GRID",
    name: "KANEK GRID™",
    blurb:
      "When the frames connect, the building comes online. A secure, building-scale digital framework for AI, twins, robotics, energy, security, and systems that have not been invented yet.",
    cover: "/images/work/vesper.jpg",
    views: [
      "/images/work/vesper.jpg",
      "/images/crane.jpg",
      "/images/work/solstice.jpg",
      "/images/weld.jpg",
    ],
    specs: [
      { label: "Scale", value: "Building-wide mesh" },
      { label: "AI layer", value: "Structure as data" },
      { label: "Security", value: "Post-quantum capable" },
      { label: "Extensible", value: "Upgrade the compute, keep the steel" },
    ],
    pdf: "/docs/kf-m42.txt",
  },
  {
    slug: "kf-c48",
    code: "KF-NODE",
    name: "STRUCTURAL NODE",
    blurb:
      "A building that knows when something changes. Stress, vibration, movement, temperature, moisture, load, connection integrity — reported to the engineer, not the next inspection cycle.",
    cover: "/images/work/civic.jpg",
    views: [
      "/images/work/civic.jpg",
      "/images/work/solstice.jpg",
      "/images/truss.jpg",
      "/images/weld.jpg",
    ],
    specs: [
      { label: "Sensing", value: "Stress · vibration · load" },
      { label: "Environment", value: "Temp · moisture" },
      { label: "Integrity", value: "Connection health" },
      { label: "Record", value: "Permanent structural history" },
    ],
    pdf: "/docs/kf-c48.txt",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
