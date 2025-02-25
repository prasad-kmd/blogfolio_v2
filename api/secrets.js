export default function handler(req, res) {
    res.status(200).json({
      telegram_token: process.env.TELEGRAM_TOKEN,
      telegram_chat_id: process.env.TELEGRAM_CHAT_ID,
    });
  }
  