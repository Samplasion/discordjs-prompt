const Discord = require('discord.js');

Discord.Message.prototype.prompt = function (client, title, desc) {
    let msg = this;
    let prompted = this.channel.send(new Discord.MessageEmbed()
                        .setTitle(title)
                        .setDescription(desc)
                        .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                    ).then(message => {
        message.react('✅').then(() => {
            message.react('❎').then(() => {
            });
        });
    });
    setTimeout(() => {
        return false;
    }, 20000);
    client.on('messageReactionAdd', (reaction, user) => {
        if (prompted.author.id == user.id) {
            if (reaction.message.reactions.get('✅').users.find('id', user.id) != undefined) {
                return true;
            }
            if (reaction.message.reactions.get('❎').users.find('id', user.id) != undefined) {
                return false;
            }
        }
    });
};