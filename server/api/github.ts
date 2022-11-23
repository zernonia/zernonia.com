const token = process.env.GITHUB_TOKEN

export default defineEventHandler(async (event) => {
  return await repoD("zernonia")
})

async function repoD(username: string) {
  var ghd = await BASICfetch(username)
  var repo_info = await ISF(username, Math.ceil(ghd.public_repos / 100))
  var tiss =
    Number(await FIssues(username)) - Number(repo_info.total_opened_issues)
  if (tiss < 0) var tiss = 0

  return {
    public_repos: format(ghd.public_repos),
    followers: format(ghd.followers),
    following: ghd.following,
    total_stars: format(repo_info.total_stars),
    total_forks: format(repo_info.total_forks),
    total_issues: format(await FIssues(username)),
    total_closed_issues: format(tiss),
    total_commits: format(await Fcommit(username)),
  }
}

// Get Total Star, Total Opened Issues, Total Forks
async function ISF(username: string, totalpage: number) {
  var array = []
  for (let i = 0; i < totalpage; i++) {
    array.push(await fetchRD(username, i + 1))
  }
  var tstars = 0
  var tforks = 0
  var toissues = 0
  array.filter(function (rt) {
    tstars += rt.total_stars
    tforks += rt.total_forks
    toissues += rt.total_opened_issues
  })
  return {
    total_stars: tstars,
    total_forks: tforks,
    total_opened_issues: toissues,
  }
}

// Fetch Basic Details
async function BASICfetch(username: string) {
  return $fetch("https://api.github.com/users/" + username, {
    headers: { Authorization: "Bearer " + token },
  })
}

// Fetch Repo Page
async function fetchRD(username: string, pageno: number) {
  return $fetch(
    "https://api.github.com/users/" +
      username +
      "/repos?per_page=100&page=" +
      pageno,
    {
      headers: { Authorization: "Bearer " + token },
    }
  )
    .then(function (resp: any) {
      var tstars = 0
      var tforks = 0
      var toissues = 0

      resp.filter(function (rt) {
        tstars += rt.stargazers_count
        tforks += rt.forks_count
        toissues += rt.open_issues
      })
      return {
        total_stars: tstars,
        total_forks: tforks,
        total_opened_issues: toissues,
      }
    })
    .catch(function (err) {
      return "Sorry that's an " + err
    })
}

// Fetch Total Commit
async function Fcommit(username: string) {
  return $fetch(
    "https://api.github.com/search/commits?per_page=1&q=author:" + username,
    {
      headers: {
        Accept: "application/vnd.github.cloak-preview",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  )
    .then(function (resco: any) {
      return resco.total_count
    })
    .catch(function (errorco) {
      return "Sorry that's an " + errorco
    })
}
async function FIssues(username: string) {
  return $fetch(
    "https://api.github.com/search/issues?per_page=1&q=author:" + username,
    {
      headers: {
        Accept: "application/vnd.github.cloak-preview",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  )
    .then(function (resis) {
      return resis.total_count
    })
    .catch(function (erroris) {
      return "Sorry that's an " + erroris
    })
}

function format(num: number) {
  return Math.abs(num) > 999
    ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + "k+"
    : Math.sign(num) * Math.abs(num)
}
