const ytdl = require('ytdl-core');

class Actions {
	greeting(ctx) {
		ctx.reply(`Hi ${ctx.update.message.from.first_name}`);
	}

	downloadVideo(ctx) {
		const url = ctx.match[1];
		const videoId = ytdl.getURLVideoID(url);
	  ctx.replyWithVideo({
	    url: `https://musiky-listen.herokuapp.com/${videoId}?source=yt&videoMode=1`,
	    filename: `${videoId}.mp4`
	  });
	}

	dlVideo(ctx) {
		const url = ctx.match[1];
	  ctx.replyWithVideo({
	    source: ytdl(url),
	  });
	}

	downloadAudio(ctx) {
		const url = ctx.match[1];
		console.log(url);
		const videoId = ytdl.getURLVideoID(url);
	  ctx.replyWithVoice({
	    url: `https://musiky-listen.herokuapp.com/${videoId}?source=yt&format=mp3`,
	    filename: `${videoId}.mp3`
	  });
	}

	dlAudio(ctx) {
		const url = ctx.match[1];
		ctx.replyWithVoice({
			source: ytdl(url, { filter: "audioonly" })
		})
	}

	text(ctx) {
		// console.log(ctx.update.message.text); // user message
		ctx.reply('Hello World')
	  // ctx.replyWithVideo({
	  //   url: 'https://musiky-listen.herokuapp.com/58jopGqRqDA?source=yt&videoMode=1',
	  //   filename: 'video.mp4'
	  // });
	}
}

module.exports = new Actions();
