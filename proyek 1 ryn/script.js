const socialMediaLinks = [
    { name: "Instagram", url: "https://www.instagram.com/raflyrnsyah?igsh=MW0wYXo0MzM3MHg2YQ==" }
];

const container = document.getElementById('social-media-links');


socialMediaLinks.forEach((platform) => {
    const link = document.createElement('a');
    link.href = platform.url;
    link.target = "_blank";
    link.textContent = platform.name;
    
    container.appendChild(link);
});
