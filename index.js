const Chat = require(__dirname +'/schema.js');
module.exports = async function(waw) {
	const router = waw.router("/api/chat");
	router.post("/get", async (req,res) =>{
		const chats = await Chat.find({
			chat: req.body.chat
		}).sort({
			_id: -1
		});
		res.json(chats);
	});
	router.post('/send', waw.ensure, async(req, res) =>{
		const chat = await Chat.create({
			chat: req.body.chat,
			author: req.user._id,
			text: req.body.text
		});
		res.json(chat);
	});
};