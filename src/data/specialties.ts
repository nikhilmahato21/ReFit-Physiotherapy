// src/data/specialties.ts

export interface SpecialtyItem {
  title: string;
  description: string;
  conditions: string[];
  imageUrl: string;
}

export const specialtiesData: SpecialtyItem[] = [
  {
    title: "Sports Physiotherapy",
    description: "Recover faster and return to peak performance with specialized care for athletic injuries.",
    imageUrl: "https://images.unsplash.com/photo-1570126646281-5ec66753f5d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder image of runner/athlete
    conditions: [
      "Heel Pain",
      "Knee Injuries",
      "Tennis / Golfer's Elbow",
      "Ankle Sprain",
      "Ligament / Tendon Injury",
      "Groin Pain",
      "Muscular Pain / Strain",
      "Shin Pain",
      "Shoulder Injury"
    ]
  },
  {
    title: "Ortho Physiotherapy",
    description: "Effective treatment for bone, joint, and muscle pain to restore mobility and improve quality of life.",
    imageUrl: "https://images.unsplash.com/photo-1628630194213-47b4a1b09939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder image of knee/joint
    conditions: [
      "Rheumatoid Arthritis",
      "Frozen Shoulder",
      "Slip Disc",
      "Osteoarthritis (Knee Pain)",
      "Joint Pain",
      "Varicose Vein",
      "Stiffness After Fracture",
      "Joint Replacement Rehab"
    ]
  },
  {
    title: "Neuro Physiotherapy",
    description: "Specialized rehabilitation for neurological disorders to enhance functional independence.",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder image of therapy
    conditions: [
      "Paralysis / Stroke",
      "Sciatica",
      "Spondylitis",
      "Neuropathy / G.B.S.",
      "Parkinson's Disease",
      "Facial Palsy",
      "Vertigo",
      "Cerebral Palsy"
    ]
  }
];