require 'dotenv'

Dotenv.load

Jekyll::Hooks.register :site, :after_init do |site|
  site.config['telegram_token'] = ENV['TELEGRAM_TOKEN']
  site.config['telegram_chat_id'] = ENV['TELEGRAM_CHAT_ID']
end
