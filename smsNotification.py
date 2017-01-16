# getting notified if new commit was made to github branch or Maor

from sendsms.message import SmsMessage
message = SmsMessage(body='lolcats make me hungry', from_phone='+41791111111', to=['+972586288454'])
message.send()