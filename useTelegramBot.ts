
import { useToast } from './use-toast';

interface TelegramConfig {
  botToken: string;
  chatId: string;
}

interface MessageData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const useTelegramBot = () => {
  const { toast } = useToast();

  const sendToTelegram = async (config: TelegramConfig, data: MessageData) => {
    if (!config.botToken || !config.chatId) {
      console.log('Telegram Bot not configured');
      return false;
    }

    const telegramMessage = `
🔔 *رسالة جديدة من موقع PALMENTAR*

👤 *الاسم:* ${data.name}
📧 *الإيميل:* ${data.email}
📱 *الهاتف:* ${data.phone || 'غير محدد'}
📋 *الموضوع:* ${data.subject}

💬 *الرسالة:*
${data.message}

⏰ *وقت الإرسال:* ${new Date().toLocaleString('ar-EG')}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: config.chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Telegram API Error:', result);
        toast({
          title: "خطأ في إرسال الرسالة",
          description: "تعذر إرسال الرسالة إلى Telegram. يرجى التحقق من إعدادات البوت.",
          variant: "destructive",
        });
        return false;
      }

      console.log('Message sent to Telegram successfully');
      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      toast({
        title: "خطأ في الاتصال",
        description: "تعذر الاتصال بـ Telegram. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
      return false;
    }
  };

  return { sendToTelegram };
};
