import { singerUrl } from "../url";

export async function fetchSinger() {
  try {
    const response = await fetch(singerUrl, {
      method: "GET",
    });
    if (response.ok) {
      const result = await response.json();
      return result.object;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error)
  }
}
