require 'json'

Jekyll::Hooks.register :site, :post_write do |site|
  secrets = {
    telegram_token: site.config['telegram_token'],
    telegram_chat_id: site.config['telegram_chat_id']
  }

  File.write(File.join(site.dest, "secrets.json"), secrets.to_json)
end
