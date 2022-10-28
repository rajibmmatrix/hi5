import {IMAGES} from './images';

export * from './routes';
export * from './colors';
export * as Icons from './icons';
export * from './images';

const NewsData = [
  {
    title: 'Uttarer Saradin',
    description:
      'Uttarer Saradin is a Bangla daily Newspaper being\npublished from Siliguri, and slowly becoming a\nhallmark of newspapers. We have reached all the\ndistrict of the Bengal.',
    isNewsPaper: true,
    isNews: false,
  },
  {
    title: 'Uttarer Saradin',
    description: '',
    isNewsPaper: false,
    isNews: true,
  },
];

const FMData = [
  {
    title: 'Radio New Town',
    image: IMAGES.FM1,
  },
  {
    title: 'Radio Milan',
    image: IMAGES.FM2,
  },
  {
    title: 'Radio Malda',
    image: IMAGES.FM3,
  },
  {
    title: 'Radio High',
    image: IMAGES.FM4,
  },
];

const LiveNews = [
  {
    title: 'Uttarer Saradin',
    image: IMAGES.Abp,
  },
  {
    title: 'India TV',
    image: IMAGES.India,
  },
  {
    title: 'B4U Movies',
    image: IMAGES.B4u,
  },
  {
    title: 'Republic TV',
    image: IMAGES.Republic,
  },
  {
    title: 'News Nation',
    image: IMAGES.NewsNation,
  },
  {
    title: 'Aakash Aath',
    image: IMAGES.Akash8,
  },
];

const Banners = [
  IMAGES.Banner,
  IMAGES.Banner,
  IMAGES.Banner,
  IMAGES.Banner,
  IMAGES.Banner,
  IMAGES.Banner,
];

export const DATA = {
  NewsData,
  LiveNews,
  FMData,
  Banners,
};
