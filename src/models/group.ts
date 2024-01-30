export enum GroupType {
  FREE = 1,
  PAID = 2,
}

export interface Group {
  id: string;
  name: string;
  metadata: {
    color: string;
    coverSmallUrl: string;
    description: string;
    displayName: string;
    initials: string;
    logoUrl: string;
    lpAccessType: GroupType;
    totalMembers: number;
    public?: boolean;
  };
}
