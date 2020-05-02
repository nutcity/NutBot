module.exports = {
	name: 'ping',
	aliases: ['pong', 'p'],
	cooldown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};