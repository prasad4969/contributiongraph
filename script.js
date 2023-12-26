
const username = 'prasad4969';
const repoImageURL = `https://raw.githubusercontent.com/${username}/contributiongraph/main/image/img2.png`; // Update with your repository name

// Fetch contribution graph
fetch(`https://api.github.com/users/${username}/events`)
    .then(response => response.json())
    .then(data => {
      
        const pushEvents = data.filter(event => event.type === 'PushEvent');
        const graphURL = `https://ghchart.rshah.org/${username}`;
        document.getElementById('contribution-graph').src = graphURL;
         document.getElementById('repository-image').src = repoImageURL;
         return fetch(`https://api.github.com/users/${username}/repos`);
    })
    .then(response => response.json())
    .then(repos => {
        // Get the first repository image URL
        if (repos.length > 0) {
            const repoImageURL = repos[0].owner.avatar_url; // Repository owner avatar URL
            document.getElementById('repository-image').src = repoImageURL;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


