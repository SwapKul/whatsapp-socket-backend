import Conversation from '../modal/Conversation.js';
import Message from '../modal/Message.js';

export const newMessage = async (req, res) => {
    console.log('hi')
    try {
        const newMessage = new Message(req.body);

        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text})

        return res.status(200).json('Message has been successfully sent.')
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id});
        return res.status(200).json(messages);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}