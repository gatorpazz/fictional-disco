const BASE_URL = 'https://api.github.com'

async function getGithubOrgs() {
  try {
    const response = await fetch(`${BASE_URL}/organizations`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getGithubOrgs();