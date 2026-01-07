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



export const services = [
  {
    id: "neuro-physio",
    title: "Neuro Physiotherapy",
    tagline: "Getting You Moving Again!",
    img:"https://actionhomerehab.com.au/wp-content/uploads/2020/08/NDIS-services-window-1280x960.jpg",
    description:
      "Neuro physiotherapy helps patients recover from neurological conditions like stroke, spinal cord injury, or Parkinson's.",
    includes: [
      "Assessment: Evaluating movement, balance, and function",
      "Tailored exercises: Strengthening, stretching, and mobility training",
      "Gait training: Improving walking patterns and balance",
      "⁠Constraint-Induced Movement Therapy (CIMT): Promoting use of affected limbs",
      "Functional training: Practicing daily activities",
    ],
    conditions: [
      "Stroke",
      "Spinal cord injury",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Traumatic brain injury",
    ],
    benefits: [
      "Improved mobility and balance",
      "Enhanced independence",
      "Better overall function",
    ],
  },
  {
    id: "ortho-physio",
    title: "Orthopedic Physiotherapy",
    tagline: "Getting You Back in Action!",
     img:"https://jyothisphysiotherapy.com/wp-content/uploads/Physiotherapy4.jpg.webp",
    description:
      "Orthopedic physiotherapy focuses on musculoskeletal conditions such as fractures, joint issues, and post-surgery rehab.",
    includes: [
      "Assessment: Evaluating movement, strength, and function",
       "Pain management: Techniques to reduce discomfort and inflammation", 
       "Strengthening exercises: Building strength and stability", 
       "Mobility training: Improving range of motion and flexibility",
        "Functional training: Practicing daily activities specific training"
    ],
    conditions: [
      "Fractures",
      "Joint pain or stiffness",
      "Arthritis",
      "Joint replacements",
      "Back pain",
    ],
    benefits: [
      "Reduced pain and inflammation",
      "Improved mobility and strength",
      "Faster recovery",
    ],
  },
  {
    id: "sports-physio",
    title: "Sports Physiotherapy",
    tagline: "Get Back in the Game!",
     img:"https://physioasia.com/wp-content/uploads/2025/10/sports-injury-physiotherapy.jpg",
    description:
      "Sports physiotherapy helps athletes and active individuals recover from injuries and improve performance.",
    includes: [
      "Injury assessment: Evaluating the injury and creating a plan",
       "Treatment: Techniques like manual therapy, taping, and modalities",
        "Strengthening exercises: Building strength and stability", 
        "Functional training: Practicing sport-specific movements", 
        "Prevention strategies: Reducing risk of future injuries"

    ],
    conditions: [
      "ACL tears",
      "Hamstring strains",
      "Shoulder injuries",
      "Ankle sprains",
      "Runner's knee",
    ],
    benefits: [
      "Faster recovery",
      "Improved performance",
      "Reduced risk of re-injury",
      "Enhanced overall fitness",
    ],
  },
  {
  id: "geriatric-physio",
  title: "Geriatric Physiotherapy",
  tagline: "Keeping Seniors Moving!",
  img: "https://blog.cuw.edu/wp-content/uploads/PT-e1692369202777.jpg",
  description:
    "Geriatric physiotherapy focuses on helping older adults maintain independence, mobility, and quality of life through personalized rehabilitation and movement-based care.",
  includes: [
    "Fall prevention: Balance and strength training to reduce fall risk",
    "Mobility training: Improving walking, transfers, and daily activities",
    "Pain management: Techniques to manage chronic pain and discomfort",
    "Exercise programs: Tailored exercises to improve strength, flexibility, and endurance",
    "Assistive device training: Learning to use walkers, canes, or other aids",
  ],
  conditions: [
    "Osteoporosis",
    "Arthritis",
    "Stroke",
    "Parkinson's disease",
    "Dementia",
  ],
  benefits: [
    "Improved mobility and balance",
    "Reduced pain and discomfort",
    "Enhanced independence",
    "Better overall quality of life",
  ],
},
{
  id: "cardio-physio",
  title: "Cardiopulmonary Physiotherapy",
  tagline: "Breathing Easy!",
  img: "https://wetakecare.in/wp-content/uploads/2021/04/chest.jpg",
  description:
    "Cardiopulmonary physiotherapy focuses on improving heart and lung function in patients with respiratory and cardiac conditions, helping them breathe easier and regain physical endurance.",
  includes: [
    "Breathing exercises: Techniques to improve lung function and oxygenation",
    "Exercise training: Gradual programs to improve cardiovascular fitness",
    "Chest clearance: Techniques to clear mucus and respiratory secretions",
    "Patient education: Learning to manage symptoms and self-manage conditions",
  ],
  conditions: [
    "COPD (Chronic Obstructive Pulmonary Disease)",
    "Asthma",
    "Heart failure",
    "Post-surgical respiratory issues",
    "Cystic fibrosis",
  ],
  benefits: [
    "Improved breathing and lung function",
    "Enhanced exercise tolerance",
    "Reduced symptoms and hospitalizations",
    "Better overall quality of life",
  ],
},
{
  id: "pediatric-physio",
  title: "Pediatric Physiotherapy",
  tagline: "Helping Little Ones Move Better!",
  img: "https://physiocuredubai.com/wp-content/uploads/2025/02/physiotherapist-helping-patient-pediatric-physiotherapy.jpg",
  description:
    "Pediatric physiotherapy focuses on improving movement, strength, and functional abilities in infants, children, and adolescents, supporting healthy growth and developmental milestones.",
  includes: [
    "Developmental assessment: Evaluating motor skills, posture, and movement patterns",
    "Gross motor training: Improving crawling, walking, running, and coordination",
    "Strength and balance exercises: Building stability and muscle control",
    "Postural correction: Addressing alignment and movement efficiency",
    "Parent education: Teaching home exercises and care strategies",
  ],
  conditions: [
    "Developmental delay",
    "Cerebral palsy",
    "Muscular dystrophy",
    "Spina bifida",
    "Pediatric orthopedic conditions",
  ],
  benefits: [
    "Improved motor skills and coordination",
    "Enhanced independence in daily activities",
    "Better posture and movement patterns",
    "Support for healthy growth and development",
  ],
},


];
