

// Replace 'YOUR_GITHUB_USERNAME' with the GitHub username for which you want to fetch the contribution graph.
const username = 'prasad4969';

// Fetch the contribution graph using the GitHub API.
fetch(`https://api.github.com/users/${username}/events`)
    .then(response => response.json())
    .then(data => {
        // Filter the data to find the 'PushEvent' which represents contributions.
        const pushEvents = data.filter(event => event.type === 'PushEvent');

        // Extract the contributions from the 'PushEvent' data.
        const contributions = pushEvents.map(event => {
            return {
                date: event.created_at.substring(0, 10), // Extract the date from the event timestamp.
                count: event.payload.size // Extract the number of contributions from the event.
            };
        });

        // Generate the URL for the contribution graph image using the contributions data.
        const graphURL = `https://ghchart.rshah.org/${username}`;

        // Set the 'src' attribute of the image element to display the contribution graph.
        document.getElementById('contribution-graph').src = graphURL;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

