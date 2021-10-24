const LinksSocialMedia = {
  github: 'oKelvinMartins',
  youtube: 'channel/UC9A6j0H2dJCyMUy_27aO9lg',
  facebook: 'Keelvinmartiins',
  instagram: 'okelvinmartins',
  twitter: 'okelvinmarttins'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
