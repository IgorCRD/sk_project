import React, { useEffect } from "react";
import styles from "./CommunityCard.module.css";
import { GroupType } from "@/models/group";
import { useMotion } from "@/hooks/motion";

export interface CommunityCardProps {
  id: string;
  title: string;
  headerImg: string;
  description: string;
  logo: string;
  numberOfMembers: number;
  accessType: GroupType;
  isPublic?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CommunityCard = React.forwardRef(
  (
    {
      id,
      title,
      description,
      logo,
      headerImg,
      accessType,
      isPublic,
      numberOfMembers,
    }: CommunityCardProps,
    ref2: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { ref } = useMotion<HTMLDivElement>(id);

    return (
      <div className={styles.communityCard} ref={ref}>
        <div
          className={styles.header}
          style={{ backgroundImage: `url(${headerImg})` }}
        ></div>
        <div className={styles.body}>
          <div className={styles.titleSection}>
            <img src={logo} className={styles.logo} />
            <span>{title}</span>
          </div>
          <span>{description}</span>

          <div className={styles.about}>
            <span>{isPublic ? "Public" : "Private"}</span>
            <span>{numberOfMembers}</span>
            <span>{accessType === GroupType.FREE ? "Free" : "Paid"}</span>
          </div>
        </div>
      </div>
    );
  }
);

CommunityCard.displayName = "CommunityCard";
