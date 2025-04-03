import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    name: string;
    avatar: string;
  };
}

interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
    address: string;
  };
  lastMessage: {
    content: string;
    timestamp: string;
    unread: boolean;
  };
  messages: Message[];
}

// Sample data - In a real app, this would come from your backend
const conversations: Conversation[] = [
  {
    id: '1',
    user: {
      name: 'Alice.eth',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63',
      address: '0x1234...5678'
    },
    lastMessage: {
      content: 'Looking forward to discussing the investment opportunity',
      timestamp: '2h ago',
      unread: true
    },
    messages: [
      {
        id: '1',
        content: 'Hi, I saw your project on Rayze and I\'m interested in learning more.',
        timestamp: '1d ago',
        sender: {
          name: 'Alice.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63'
        }
      },
      {
        id: '2',
        content: 'Thanks for reaching out! Happy to discuss the details.',
        timestamp: '1d ago',
        sender: {
          name: 'You',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=You&backgroundColor=00bf63'
        }
      },
      {
        id: '3',
        content: 'Looking forward to discussing the investment opportunity',
        timestamp: '2h ago',
        sender: {
          name: 'Alice.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63'
        }
      }
    ]
  },
  {
    id: '2',
    user: {
      name: 'Bob.eth',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63',
      address: '0x9876...4321'
    },
    lastMessage: {
      content: 'When is the next milestone due?',
      timestamp: '5h ago',
      unread: false
    },
    messages: [
      {
        id: '1',
        content: 'Hey, quick question about your project roadmap.',
        timestamp: '1d ago',
        sender: {
          name: 'Bob.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63'
        }
      },
      {
        id: '2',
        content: 'Sure, what would you like to know?',
        timestamp: '1d ago',
        sender: {
          name: 'You',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=You&backgroundColor=00bf63'
        }
      },
      {
        id: '3',
        content: 'When is the next milestone due?',
        timestamp: '5h ago',
        sender: {
          name: 'Bob.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63'
        }
      }
    ]
  }
];

export function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');

  const filteredConversations = conversations.filter(conversation =>
    conversation.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Here you would handle sending the message
    // For now, we'll just clear the input
    setMessage('');
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-8">
      {/* Message List */}
      <div className="w-1/3 bg-[#201E29] rounded-xl border border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#16141D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BF63]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`w-full p-4 text-left border-b border-gray-800 hover:bg-[#16141D] transition-colors ${
                selectedConversation?.id === conversation.id ? 'bg-[#16141D]' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{conversation.user.name}</h3>
                    <span className="text-xs text-gray-400">{conversation.lastMessage.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400 truncate">{conversation.lastMessage.content}</p>
                    {conversation.lastMessage.unread && (
                      <div className="w-2 h-2 bg-[#00BF63] rounded-full flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Message Content */}
      {selectedConversation ? (
        <div className="flex-1 bg-[#201E29] rounded-xl border border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img
                src={selectedConversation.user.avatar}
                alt={selectedConversation.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{selectedConversation.user.name}</h3>
                <p className="text-sm text-gray-400">{selectedConversation.user.address}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender.name === 'You' ? 'flex-row-reverse' : ''
                }`}
              >
                <img
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  className="w-8 h-8 rounded-full"
                />
                <div
                  className={`max-w-[70%] ${
                    message.sender.name === 'You'
                      ? 'bg-[#00BF63] text-white'
                      : 'bg-[#16141D] text-gray-300'
                  } rounded-lg p-3`}
                >
                  <p>{message.content}</p>
                  <span className="block text-xs mt-1 opacity-75">{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-800">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BF63]"
              />
              <button
                type="submit"
                className="p-2 text-[#00BF63] hover:text-[#00a857] disabled:text-gray-500"
                disabled={!message.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 bg-[#201E29] rounded-xl border border-gray-800 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Select a conversation</h2>
            <p className="text-gray-400">Choose a conversation from the list to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
}