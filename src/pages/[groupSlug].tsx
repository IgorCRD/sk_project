import React from "react";
import { Community } from "@/screens/Community/Community";
import { NextPageContext } from "next";
import { getCommunity } from "@/dataFetchers/api";

export async function getServerSideProps(context: NextPageContext) {
  const { groupSlug } = context.query;

  const community = await getCommunity(
    Array.isArray(groupSlug) ? groupSlug[0] : groupSlug ?? ""
  );

  return { props: { group: community.pageProps.currentGroup } };
}

export default Community;
