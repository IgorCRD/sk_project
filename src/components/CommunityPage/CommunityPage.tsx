import React, { useLayoutEffect, useRef } from "react";
import styles from "./CommunityPage.module.css";
import { GroupType } from "@/models/group";
import { useMotion } from "@/hooks/motion";

export interface CommunityPageProps {
  id: string;
  title: string;
  headerImg: string;
  description: string;
  logo: string;
  numberOfMembers: number;
  accessType: GroupType;
  isPublic?: boolean;
}

export const CommunityPage = ({
  id,
  title,
  description,
  logo,
  headerImg,
  accessType,
  isPublic,
  numberOfMembers,
}: CommunityPageProps) => {
  const { ref } = useMotion<HTMLDivElement>(id);

  return (
    <>
      <div className={styles.communityPage} ref={ref}>
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
    </>
  );
};
