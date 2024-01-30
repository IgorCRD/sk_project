let getSkoolBuildIdCache: string | undefined = undefined;
export async function getSkoolBuildId({ force }: { force?: boolean } = {}) {
  if (getSkoolBuildIdCache && !force) return getSkoolBuildIdCache;

  const response = await fetch("https://www.skool.com/discovery");
  const rawPageText = await response.text();

  getSkoolBuildIdCache = (rawPageText.match(/\"buildId\":\"(\d+)\"/) ?? [])[1];
  return getSkoolBuildIdCache;
}

export async function getDiscoveryGroups() {
  let buildId = await getSkoolBuildId();
  let response = await fetch(
    `https://www.skool.com/_next/data/${buildId}/discovery.json`
  );

  if (response.status !== 200) {
    buildId = await getSkoolBuildId({ force: true });
    response = await fetch(
      `https://www.skool.com/_next/data/${buildId}/discovery.json`
    );
  }

  return await response.json();
}

export async function getCommunity(groupSlug: string) {
  let buildId = await getSkoolBuildId();
  let response = await fetch(
    `https://www.skool.com/_next/data/${buildId}/${groupSlug}/about.json?group=${groupSlug}`
  );

  if (response.status !== 200) {
    buildId = await getSkoolBuildId({ force: true });
    let response = await fetch(
      `https://www.skool.com/_next/data/${buildId}/${groupSlug}/about.json?group=${groupSlug}`
    );
  }

  return await response.json();
}
