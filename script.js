const links = {
    invite: "https://discord.com/oauth2/authorize?client_id=1279512390756470836&permissions=1512768400582&integration_type=0&scope=bot+applications.commands&redirect_uri=https%3A%2F%2Fspectrabot.pages.dev&response_type=code",
    support: "https://discord.com/invite/fcPF66DubA",
    discord: "https://discord.com/invite/fcPF66DubA",
    twitter: "https://x.com/Discord_Spectra",
    github: "https://github.com/SpectraDiscordBot/Spectra",
    tos: "https://docs.google.com/file/d/1zHod3muZfQwq7Si1OaK7trwCqYYFN5QWFRsD2M2np14/edit?usp=sharing",
    privacy: "https://drive.google.com/file/d/1HQaIKPvNjiSlx3gXn8KiHcVcfLlfDXbv/view?usp=sharing",
    docs: "https://www.notion.so/spectra-docs/Introduction-17f36833aca1806bbd11cd5faa438fef"
};

document.getElementById('invite-btn').href = links.invite;
document.getElementById('discord-link').href = links.discord;
document.getElementById('twitter-link').href = links.twitter;
document.getElementById('github-link').href = links.github;
document.getElementById('tos-link').href = links.tos;
document.getElementById('privacy-link').href = links.privacy;
document.getElementById('docs').href = links.docs;

document.querySelector('.hero-text p').innerText = "Spectra brings utility and moderation tools to your Discord server with ease!";