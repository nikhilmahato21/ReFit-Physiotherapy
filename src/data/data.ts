// src/data.ts

export interface MasonryImage {
  id: number;
  src: string;
  alt: string;
  // Specific Tailwind classes for shaping (border-radius, aspect ratio tweaks)
  className?: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  rating: number;
}

// Placeholder images from Unsplash matching the theme
export const galleryImages: MasonryImage[] = [
  // Column 1 roughly
  { id: 1, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80", alt: "Team meeting", className: "rounded-2xl mb-4" },
  { id: 2, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80", alt: "Modern office furniture", className: "rounded-[30px] mb-4 aspect-[4/3]" },
  // Column 2 roughly
  { id: 3, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80", alt: "Open workspace", className: "rounded-2xl mb-4 aspect-[3/2]" },
  { id: 4, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", alt: "Writing notes", className: "rounded-2xl mb-4 aspect-square" },
  { id: 5, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80", alt: "Collaborative meeting", className: "rounded-[40px] mb-4" },
   // Column 3 roughly (The tall pill)
  { id: 6, src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&q=80", alt: "Woman working at desk", className: "rounded-full aspect-[2/5] mb-4 object-cover" },
  // Column 4 roughly
  { id: 7, src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=80", alt: "Woman laptop lobby", className: "rounded-t-full rounded-b-2xl mb-4" },
   // Column 5 roughly
  { id: 8, src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&q=80", alt: "Plant in office", className: "rounded-[40px] mb-4 aspect-[3/4]" },
  // Column 6 roughly
  { id: 9, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80", alt: "Man working laptop", className: "rounded-2xl mb-4 aspect-square" },
  { id: 10, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80", alt: "Conference hall", className: "rounded-2xl mb-4" },
  { id: 11, src: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=500&q=80", alt: "Modern lobby overhead", className: "rounded-[30px] mb-4 aspect-[4/3]" },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "WorkNook makes finding a coworking space so easy! I can book a desk in minutes and get straight to work. Highly recommend!",
    name: "Joao M.",
    title: "Startup Founder",
    avatarSrc: "https://i.pravatar.cc/150?img=68", // Placeholder avatar
    rating: 5,
  },
  {
    id: 2,
    quote: "Our team needed a flexible meeting space, and WorkNook delivered. The process was smooth, and the space was exactly what we needed!",
    name: "Bruno K.",
    title: "UX Designer",
    avatarSrc: "https://i.pravatar.cc/150?img=59", // Placeholder avatar
    rating: 5,
  },
  {
    id: 3,
    quote: "I love the variety of spaces available! Whether I need a quiet spot or a collaborative space, WorkNook always has the perfect option.",
    name: "Lais A.",
    title: "Digital Marketer",
    avatarSrc: "https://i.pravatar.cc/150?img=49", // Placeholder avatar
    rating: 5,
  },
];