# DiscordJS Bot

This is a Discord bot built using Discord.js.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/STV-Informatik-Salzburg/STV-Informatik-Bot
    ```

2. Navigate into the project directory:

    ```bash
    cd STV-Informatik-Bot
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Setup

### Bot Token

1. Create a Discord application and bot on the [Discord Developer Portal](https://discord.com/developers/applications).
2. Copy the bot token provided by Discord.
3. Create a `.env` file in the root directory of the project, by copying the existing `.env.example` file.
4. Add your bot token to the `.env` file:

    ```
    DISCORD_TOKEN=your-bot-token-goes-here
    ```
### Adding the Bot to your Server
1. Navigate to the "OAuth2" tab of your application on the Discord Developer Portal.
2. Under "OAuth2 URL Generator", select the "bot" scope and the "Administrator" permission. 
    > **Note:** For now its admin, but in the future we will change it to the required permissions.
3. Copy the generated URL and paste it into your web browser.
4. Select the server you want to add the bot to and click "Authorize".

### Required ID's
#### Guild ID
1. In discord, go to the settings and under "Advanced" enable "Developer Mode".
2. Right click on the Server, you added the bot to and click "Copy ID".
3. Paste the ID into the `.env` file:
    
    ```
    GUILD_ID=your-cuild-id-goes-here
    ```
#### Client ID
1. Click on the server and open the Member list.
2. Right click on the bot and click "Copy ID".
3. Paste the ID into the `.env` file:
    
    ```
    CLIENT_ID=your-bot-id-goes-here
    ```
## Deploying Commands
This bot is using the slash commands feature of discord.js. To deploy the commands, use the following command inside the project directory:

```bash
npm run deploy-commands
```

## Usage

To run the bot, use the following command:

```bash
node .
```

The bot should now be online and active in your Discord server.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
