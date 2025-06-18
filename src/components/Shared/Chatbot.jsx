import { useWebchat, Container, Header, Composer, Fab, MessageList, StylesheetProvider } from '@botpress/webchat';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Chatbot() {
  const { t } = useTranslation();
  const chatbot_header = t('chatbot_header');
  const chatbot_description = t('chatbot_description');
  const chatbot_placeholder = t('chatbot_placeholder');

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const { client, clientState, newConversation, messages, isTyping, user } = useWebchat({
    clientId: '57b2f37f-f079-40ce-a129-584c72b48e70'
  });

  const headerConfig = {
    botName: chatbot_header,
    botAvatar: '/assets/images/logo-no-text.png'
  };

  const config = {
    botName: 'Francine',
    botAvatar: '/assets/images/female-avatar-8.png',
    botDescription: chatbot_description,
    color: '#51a2ff',
    fontFamily: 'Inter',
    radius: 2,
    variant: 'solid',
    themeMode: 'light'
  };

  const enrichedMessages = useMemo(
    () =>
      messages.map((message) => {
        const direction = message.authorId === user?.userId ? 'outgoing' : 'incoming';
        return {
          ...message,
          direction,
          sender:
            direction === 'outgoing'
              ? { name: user?.name ?? 'You', avatar: user?.pictureUrl }
              : { name: config.botName ?? 'Bot', avatar: config.botAvatar }
        };
      }),
    [config.botAvatar, config.botName, messages, user?.userId, user?.name, user?.pictureUrl]
  );

  return (
    <>
      <StylesheetProvider
        color={config.color}
        fontFamily={config.fontFamily}
        radius={config.radius}
        variant={config.variant}
        themeMode={config.themeMode}
      />
      <Container
        connected={clientState !== 'disconnected'}
        style={{
          width: '30rem',
          height: '29rem',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '4.5rem',
          right: '2.2rem',
          zIndex: '50'
        }}
      >
        <Header
          defaultOpen={false}
          closeWindow={() => setIsWebchatOpen(false)}
          restartConversation={newConversation}
          disabled={false}
          configuration={headerConfig}
        />
        <MessageList
          botAvatar={config.botAvatar}
          botName={config.botName}
          botDescription={config.botDescription}
          isTyping={isTyping}
          showMarquee={true}
          messages={enrichedMessages}
          sendMessage={client?.sendMessage}
        />
        <Composer
          disableComposer={false}
          isReadOnly={false}
          allowFileUpload={false}
          connected={clientState !== 'disconnected'}
          sendMessage={client?.sendMessage}
          uploadFile={client?.uploadFile}
          composerPlaceholder={chatbot_placeholder}
          showPoweredBy={false}
        />
      </Container>
      <Fab
        onClick={() => setIsWebchatOpen(!isWebchatOpen)}
        style={{ position: 'fixed', bottom: '1rem', right: '2.2rem', width: '3.5rem', height: '2.5rem' }}
      />
    </>
  );
}

export default Chatbot;
