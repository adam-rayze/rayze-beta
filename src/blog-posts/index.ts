import { tokenizedEquityPost } from './tokenized-equity';
import { evolutionOfDaosPost } from './evolution-of-daos';
import { startupFundingPost } from './startup-funding';
import { whyStartDaoPost } from './why-start-dao';
import { smartContractsPost } from './smart-contracts';

export interface BlogPost {
  title: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  relatedPosts: string[];
}

export const blogPosts: Record<string, BlogPost> = {
  'tokenized-equity-future-company-ownership': tokenizedEquityPost,
  'evolution-of-daos': evolutionOfDaosPost,
  'modern-startup-funding-landscape': startupFundingPost,
  'why-start-dao': whyStartDaoPost,
  'understanding-smart-contracts': smartContractsPost
};

export const blogPostsList = [
  {
    slug: 'understanding-smart-contracts',
    title: smartContractsPost.title,
    excerpt: "Explore how smart contracts work, their real-world applications, benefits, and limitations. Essential knowledge for anyone involved in Web3 and blockchain technology.",
    author: smartContractsPost.author,
    date: smartContractsPost.date,
    readTime: smartContractsPost.readTime,
    category: smartContractsPost.category,
    image: smartContractsPost.image,
    tags: smartContractsPost.tags
  },
  {
    slug: 'why-start-dao',
    title: whyStartDaoPost.title,
    excerpt: "Explore the compelling benefits of starting a DAO, from true democratic governance to global collaboration. Learn how DAOs are revolutionizing organizational structures.",
    author: whyStartDaoPost.author,
    date: whyStartDaoPost.date,
    readTime: whyStartDaoPost.readTime,
    category: whyStartDaoPost.category,
    image: whyStartDaoPost.image,
    tags: whyStartDaoPost.tags
  },
  {
    slug: 'modern-startup-funding-landscape',
    title: startupFundingPost.title,
    excerpt: "Discover how the modern startup funding landscape has evolved and learn how to navigate various funding options to fuel your startup's growth.",
    author: startupFundingPost.author,
    date: startupFundingPost.date,
    readTime: startupFundingPost.readTime,
    category: startupFundingPost.category,
    image: startupFundingPost.image,
    tags: startupFundingPost.tags
  },
  {
    slug: 'tokenized-equity-future-company-ownership',
    title: tokenizedEquityPost.title,
    excerpt: 'Explore how blockchain technology is revolutionizing company ownership through tokenized equity, enabling unprecedented liquidity and global accessibility for investors.',
    author: tokenizedEquityPost.author,
    date: tokenizedEquityPost.date,
    readTime: tokenizedEquityPost.readTime,
    category: tokenizedEquityPost.category,
    image: tokenizedEquityPost.image,
    tags: tokenizedEquityPost.tags
  },
  {
    slug: 'evolution-of-daos',
    title: evolutionOfDaosPost.title,
    excerpt: 'Explore how Decentralized Autonomous Organizations (DAOs) are revolutionizing digital collaboration and organizational governance in the Web3 era.',
    author: evolutionOfDaosPost.author,
    date: evolutionOfDaosPost.date,
    readTime: evolutionOfDaosPost.readTime,
    category: evolutionOfDaosPost.category,
    image: evolutionOfDaosPost.image,
    tags: evolutionOfDaosPost.tags
  }
];