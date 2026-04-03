fetch('https://api.github.com/repos/baguette-le-pain/Lume-website/commits/main')
  .then(response => response.json())
  .then(data => {
    const date = new Date(data.commit.author.date).toLocaleDateString();
    document.getElementById('last-update').innerText = `Last System Pulse: ${date}`;
  });
