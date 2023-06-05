const BASE_URL = 'https://api.github.com'

export async function getGithubOrgs() {
  try {
    const response = await fetch(`${BASE_URL}/organizations`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}