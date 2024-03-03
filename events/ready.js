const { Events } = require("discord.js");
// This event is triggered once the bot has successfully logged in

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};