const BASE_URL = 'https://api.github.com'
const listEl = document.querySelector('.list-container');

function renderOrgDetails() {
  console.log("render org details")
}

function getOrgDetails() {
  console.log("Org details")
}

async function getGithubOrgs() {
  try {
    const response = await fetch(`${BASE_URL}/organizations`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function renderGithubOrgs(orgs) {
  const template = orgs.map(org => `
    <li class="list-item">${org.login}</li>
  `);
  listEl.innerHTML = template.join('');
}

const init = async () => {
  const orgs = await getGithubOrgs();
  renderGithubOrgs(orgs);
}

init();