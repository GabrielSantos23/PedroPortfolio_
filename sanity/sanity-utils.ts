import { createClient, groq } from 'next-sanity';

export const client = createClient({
  projectId: 'docvvcqm',

  dataset: 'production',

  apiVersion: '2023-02-19',
});

export async function getProjects() {
  return client.fetch(
    groq`*[_type == 'videos']{
        _id,
        _createdAt,
        title,
        subtitle,
        description,
        about,
        link,
        category,
        tools,
        "imageUrl": imageUrl.asset->url,
      } | order(_createdAt desc)`
  );
}
export async function getInfo() {
  const posts = await client.fetch(`*[_type == "info"]{
    about,
_createdAt,
_updatedAt,
email,
youtube,
_type,
cousesName,
subtitle,
_id,
apresentation,
instagram,
"profilePicture": profilePicture.asset->url,
resume,
courses,
_rev,
  }`);
  return posts;
}

export async function getNavbar() {
  const posts = await client.fetch('*[_type == "navbar"]');
  return posts;
}

export async function getContact() {
  const posts = await client.fetch(`*[_type == "contact"]{
  _type,
_id,
title,
_updatedAt,
youtube,
twitter,
subtitle,
_rev,
email,
"profilePicture": profilePicture.asset->url,
_createdAt,
instagram,

  }`);
  return posts;
}

export async function getVideoInfo(id: string) {
  const query = `*[ _type == "videos" && _id == "${id}" ][0] {
    about,
link,
description,
title,
_createdAt,
"imageUrl": imageUrl.asset->url,
_rev,
_type,
_id,
category,
  _updatedAt,
tools,
subtitle,
  }`;
  const video = await client.fetch(query);
  return video;
}
