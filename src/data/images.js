export const unsplash = (id, width = 900) =>
  `https://images.unsplash.com/${id}?w=${width}&q=80&auto=format&fit=crop`;

export const images = {
  hero: unsplash("photo-1512621776951-a57141f2eefd", 1600),
  about: unsplash("photo-1490645935967-10de6ba17061", 1000),
  chef: unsplash("photo-1556910103-1c02745aae4d", 600),
  invest: unsplash("photo-1546069901-ba9599a7e63c", 800),
  cta: unsplash("photo-1416879595882-3373a0480b5b", 1600),
  avatars: {
    sara: unsplash("photo-1494790108377-be9c29b29330", 160),
    ahmed: unsplash("photo-1507003211169-0a1dd7228f2d", 160),
    fatima: unsplash("photo-1438761681033-6461ffad8d80", 160),
  },
};
