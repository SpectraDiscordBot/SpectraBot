// Replace these variables with your actual links when you have them
const links = {
    invite: "https://discord.com/oauth2/authorize?client_id=1279512390756470836&permissions=939912256&integration_type=0&scope=bot+applications.commands",
    support: "https://discord.com/invite/fcPF66DubA",
    discord: "https://discord.com/invite/fcPF66DubA",
    twitter: "https://x.com/Discord_Spectra",
    github: "https://github.com/SpectraDiscordBot/Spectra"
};

document.getElementById('invite-btn').href = links.invite;
document.getElementById('discord-link').href = links.discord;
document.getElementById('twitter-link').href = links.twitter;
document.getElementById('github-link').href = links.github;

document.querySelector('.hero-text p').innerText = "Spectra brings utility and moderation tools to your Discord server with ease!";