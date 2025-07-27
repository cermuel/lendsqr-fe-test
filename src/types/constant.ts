export interface SideMenuLinks {
  header?: string;
  links: Link[];
}

export interface Link {
  icon: string;
  title: string;
  url?: string;
}
