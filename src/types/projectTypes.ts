export type Project = {
    name: string;
    slug: string; // URL-safe identifier (e.g., 'digidine')
    techStack: string[];
    period: string;
    description: string[];
    thumbnail?: string;
    links?: {
      repo?: string;
      demo?: string;
    };
    screenshots?: string[]; // Array of image paths relative to /public
    details: {
      overview: string;
      why: string;
      learnings: string;
      achievements: string[];
      future?: string;
      extra?: string;
    };
    tags: string[]; // e.g., ['web', 'mobile', 'ai']
  };
  