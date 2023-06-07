import { PortableTextBlock } from 'sanity';

export interface VideoProps {
  title: Record<string, string>;
  link: string;
  imageUrl: string;
  category: string;
  tools: string[];
  _id: string;
  _createdAt: string;
  subtitle: Record<string, string>;
  description: {
    pt: Block[];
    en: Block[];
  };
  about: {
    pt: Block[];
    en: Block[];
  };
}

interface Block {
  _type: string;
  _key: string;
  style: string;
  markDefs: any[];
  children: Child[];
}

interface Child {
  _type: string;
  _key: string;
  marks: any[];
  text: string;
}

export interface InfoProps {
  about: Record<string, string>;
  _createdAt: string;
  _updatedAt: string;
  email: string;
  youtube: string;
  _type: string;
  cousesName: Record<string, string>;
  subtitle: Record<string, string>;
  _id: string;
  apresentation: Record<string, string>;
  instagram: string;
  profilePicture: string;
  resume: Record<string, string>;
  courses: Record<string, string>;
  _rev: string;
}

export interface NavbarProps {
  _updatedAt: string;
  home: Record<string, string>;
  info: Record<string, string>;
  _createdAt: string;
  contact: Record<string, string>;
  _rev: string;
  _type: string;
  _id: string;
}

export interface ContactProps {
  _type: string;
  _id: string;
  title: Record<string, string>;
  _updatedAt: string;
  youtube: string;
  twitter: string;
  subtitle: Record<string, string>;
  _rev: string;
  email: string;
  profilePicture: string;
  _createdAt: string;
  instagram: string;
}

export interface VideoData {
  about: Record<string, PortableTextBlock[]>;
  link: string;
  description: Record<string, PortableTextBlock[]>;
  title: Record<string, string>;
  _createdAt: string;
  imageUrl: string;
  _rev: string;
  _type: string;
  _id: string;
  category: string;
  _updatedAt: string;
  tools: string[];
  subtitle: Record<string, string>;
}
