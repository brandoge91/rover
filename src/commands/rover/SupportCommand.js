const Command = require('../Command')

module.exports =
class AnnounceChannelCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'support',
      properName: 'Support',
      aliases: ['server'],
      userPermissions: [],
      description: 'Posts an invite link to the Official RoVer Discord where you can easily get help.'
    })
  }

  async fn (msg) {
    msg.author.send('Having trouble? You can join our official support discord here: discord.gg/7yfwrat, or you can check out the documentation here: https://rover.link/#readme')
    msg.reply('Sent you a DM with information.')
  }
}
