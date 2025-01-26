export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  origin: string;
  og: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  }
  socials: {
    github: string;
    x: string;
  }
  siteUrl: string;
}

export type Theme = "light" | "dark";

export type NavItem = {
  title: string;
  url: string;
}

export type NavItemWithChildren = NavItem & {
  items: NavItemWithChildren[];
}

export type SidebarItem = NavItemWithChildren & {};

export interface UnistNode extends Node {
  type: string
  name?: string
  tagName?: string
  value?: string
  properties?: {
    __rawString__?: string
    __className__?: string
    __event__?: string
    [key: string]: unknown
  } & NpmCommands
  attributes?: {
    name: string
    value: unknown
    type?: string
  }[]
  children?: UnistNode[]
}

export interface UnistTree extends Node {
  children: UnistNode[]
}

export interface NpmCommands {
  __npmCommand__?: string
  __yarnCommand__?: string
  __pnpmCommand__?: string
  __bunCommand__?: string
}


export type Portfolio = {
  name: string;
  tagline: string;
  resume: string;
  links: {
    github: string;
    linkedin: string;
    mail: string;
    phone: string;
    facebook: string;
  }
}