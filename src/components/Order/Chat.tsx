import "regenerator-runtime";
import dynamic from "next/dynamic";
import {
  useCallback,
  useEffect,
  useState,
  MutableRefObject,
  useRef
} from 'react';
import
SpeechRecognition,
{ useSpeechRecognition }
  from 'react-speech-recognition';

import {
  Flex,
  Box,
  Avatar,
  Stack,
  Input,
  Text,
  Icon as IconChakra,
} from '@chakra-ui/react';

import {
  RiSearchLine,
  RiLayoutRightLine,
  RiMore2Line,
  RiCloseLine,
  RiEmotionLine,
  RiMicLine,
  RiSendPlaneLine,
  RiPauseCircleLine,
  RiCustomerService2Line
} from 'react-icons/ri';

import { Icon } from '../Icon';
import { Icon as IconChat } from './Icon';
import { BoxMessage } from './BoxMessage';

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

interface Chat {
  chat_id: number;
  title: string;
}

interface User {
  id: string;
  name: string;
  avatar: string
}

interface ChatProps {
  chat: Chat;
  user: User;
}

interface MessageProps {
  sender_id: string;
  body: string;
  date: string;
}

export function Chat({ chat, user }: ChatProps) {
  const [list, setList] = useState<MessageProps[]>([
    { sender_id: '1', body: 'Lorem ipsum dolor sit amet, dolore magna aliqua.', date: '18:01' },
    { sender_id: '2', body: 'Lorem ipsum dolor.', date: '18:03' },
    { sender_id: '1', body: 'Lorem ipsum dolor sididunt ut labore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem qua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing ', date: '18:01' },
    { sender_id: '2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua.', date: '18:03' },
    { sender_id: '1', body: 'Lorem ipsum dolor sit amere magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorequa.', date: '18:01' },
    { sender_id: '2', body: 'Lort labore et dolore magna aliqua.', date: '18:03' },
    { sender_id: '1', body: 'Loreabore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'bore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem ipsum dolor sit amet, lore magna aliqua.', date: '18:01' },
    { sender_id: '2', body: 'Lorem agna aliqua.', date: '18:03' },
    { sender_id: '1', body: 'ore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'g elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem ipsum do et dolore magna aliqua.', date: '18:01' },
    { sender_id: '2', body: 'Lorem ipsum dolor sit ameet dolore magna aliqua.', date: '18:03' },
    { sender_id: '1', body: 'Lorem ip aliqua.', date: '18:06' },
  ]);

  const bodyRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (bodyRef.current?.scrollHeight > bodyRef.current?.offsetHeight) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight - bodyRef.current.offsetHeight;
    }
  }, [list]);

  const [text, setText] = useState<string>('');
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);

  const handleEmojiClick = useCallback((event: Event, emojiObject: { emoji: string }) => {
    setText(text + emojiObject.emoji);
  }, [text]);

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState<boolean>(false);

  // useEffect(() => {
  //   setText(transcript);
  // }, [transcript])

  const handleStartMic = () => {
    resetTranscript();
    setListening(true);

    SpeechRecognition.startListening({ continuous: true });
  }

  const handleEndMic = () => {
    setListening(false);
    SpeechRecognition.stopListening();
    setText(transcript);

  }

  const handleSendClick = () => {
    setList(oldState => [...oldState, { sender_id: '1', body: text, date: '18:06' }]);
    setText('');
  }

  return (
    <Box
      as={Flex}
      flexDirection="column"
      height="100%"
      bg="gray.800"
    >
      <Box
        height="3.75rem"
        borderBottom="1px solid gray.900"
        as={Flex}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box as={Flex} alignItems="center" cursor="pointer">
          <Flex
            justifyContent="center"
            alignItems="center"
            p={4}
            bgColor="gray.700"
            borderRadius="100%"
            mx="4"
          >
            <IconChakra as={RiCustomerService2Line} />
          </Flex>
          <Text fontSize="1rem" color="gray.300">{chat.title}</Text>
        </Box>
        <Box
          as={Flex}
          alignItems="center"
          marginRight="1rem"
        >
          <Stack direction="row">
            <Icon icon={RiSearchLine} />
            <Icon icon={RiLayoutRightLine} />
            <Icon icon={RiMore2Line} />
          </Stack>
        </Box>
      </Box>
      <Box
        flex="1"
        overflowY="auto"
        bg="gray.700"
        backgroundSize="cover"
        backgroundPosition="top"
        padding="1rem 1.5rem"
        css={{
          '&::-webkit-scrollbar': {
            width: '0.375rem',
            height: '0.375rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          },
        }}
        ref={bodyRef}
      >
        {
          list.map((item, key) => (
            <BoxMessage
              key={key}
              item={item}
              user={user}
            />
          ))
        }
      </Box>
      <Box
        height={emojiOpen ? '16rem' : '0px'}
        overflowY="hidden"
        transition="all ease 0.3s"
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
          native={true}
          pickerStyle={{ width: 'auto', background: 'none' }}
        />
      </Box>
      <Box as={Flex} height="4rem" alignItems="center">
        <Box as={Flex} margin="0 1rem">
          <IconChat
            width={emojiOpen ? '2.5rem' : '0'}
            icon={RiCloseLine}
            handle={handleCloseEmoji}
          />
          <IconChat
            icon={RiEmotionLine}
            color={emojiOpen ? '#009688' : '#919191'}
            handle={handleOpenEmoji}
          />
        </Box>
        <Box flex="1">
          <Input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)}
            width="100%"
            height="2.5rem"
            border="0"
            outline="0"
            backgroundColor="gray.700"
            borderRadius="1.25rem"
            fontSize="1rem"
            color="gray.300"
            paddingLeft="1rem"
            _focus={{
              border: "0",
              outline: "0"
            }}
          />
        </Box>
        <Box as={Flex} margin="0 1rem">
          {(text === '' && listening) &&
            <Icon
              icon={RiPauseCircleLine}
              color="#009688"
              handle={handleEndMic}
            />
          }
          {text === '' &&
            <Icon
              icon={RiMicLine}
              color={listening ? '#126ECE' : '#919191'}
              handle={handleStartMic}
            />
          }

          <Icon
            icon={RiSendPlaneLine}
            handle={handleSendClick}
          />
        </Box>
      </Box>
    </Box>
  );
}