import hamstoryThumbnail from '../img/hamstory_thumnail.png';
import horropsThumbnail from '../img/horrops_thumnail.png';
import nunsaramThumbnail from '../img/nunsaram_thumnail.png';

// Hamstory screenshots
import hamstoryScreenshot1 from '../img/preview/hamstory/storepage_screenshot_1.jpg';
import hamstoryScreenshot2 from '../img/preview/hamstory/storepage_screenshot_2.jpg';
import hamstoryScreenshot3 from '../img/preview/hamstory/storepage_screenshot_3.jpg';
import hamstoryScreenshot4 from '../img/preview/hamstory/storepage_screenshot_4.jpg';
import hamstoryScreenshot5 from '../img/preview/hamstory/storepage_screenshot_5.jpg';
import hamstoryScreenshot6 from '../img/preview/hamstory/storepage_screenshot_6.JPG';
import hamstoryScreenshot7 from '../img/preview/hamstory/storepage_screenshot_7.JPG';
import hamstoryScreenshot8 from '../img/preview/hamstory/storepage_screenshot_8.JPG';
import hamstoryScreenshot9 from '../img/preview/hamstory/storepage_screenshot_9.JPG';
import hamstoryScreenshot10 from '../img/preview/hamstory/storepage_screenshot_10.JPG';
import hamstoryScreenshot11 from '../img/preview/hamstory/storepage_screenshot_11.JPG';
import hamstoryScreenshot12 from '../img/preview/hamstory/storepage_screenshot_12.JPG';
import hamstoryScreenshot13 from '../img/preview/hamstory/storepage_screenshot_13.JPG';

export const games = [
  {
    id: 1,
    title: 'Hamstory',
    titleKo: '햄스토리',
    description: '2D pixel art platformer that offers both emotional depth and challenging gameplay.',
    descriptionKo: '2D 픽셀 아트 플랫폼 게임으로, 감동적인 스토리와 도전적인 게임플레이를 제공합니다.',
    image: hamstoryThumbnail,
    logo: 'Hamstory',
    platforms: ['Steam', 'PC', 'Windows'],
    bgColor: 'linear-gradient(135deg, rgba(250, 152, 58, 0.1), rgba(250, 152, 58, 0.05))',
    detailInfo: {
      introduction: {
        en: 'Hamstory is a 2D pixel art platformer that offers both emotional depth and challenging gameplay. Embark on an unforgettable journey through beautifully crafted levels filled with secrets, puzzles, and heartwarming moments.',
        ko: '감성과 도전을 느낄 수 있는 2D 픽셀 점프 플랫포머입니다. 점프 타이밍을 잡아 도약하고, 추락해도 괜찮습니다. 눈앞의 길을 어떻게 갈지 고민하며 경로를 찾아보세요. 따뜻한 동물 주민들의 위로 속에서 해씨별로 향하며, 계절마다 변하는 세계를 경험하세요.'
      },
      features: {
        en: [
          'Challenging platforming mechanics',
          'Beautiful pixel art graphics',
          'Hidden secrets and collectibles',
          'Multiple endings based on your choices'
        ],
        ko: [
          '다음을 향한 점프!',
          '동물 주민들과 함께하는 여정',
          '감성을 담은 픽셀 그래픽',
          '계절이 살아있는 세계'
        ]
      },
      trailer: 'https://www.youtube.com/embed/f_EXMft1nsg?si=mijd-LFe_2oEnJMr',
      screenshots: [
        hamstoryScreenshot1,
        hamstoryScreenshot2,
        hamstoryScreenshot3,
        hamstoryScreenshot4,
        hamstoryScreenshot5,
        hamstoryScreenshot6,
        hamstoryScreenshot7,
        hamstoryScreenshot8,
        hamstoryScreenshot9,
        hamstoryScreenshot10,
        hamstoryScreenshot11,
        hamstoryScreenshot12,
        hamstoryScreenshot13
      ]
    }
  },
  {
    id: 2,
    title: 'Horrops',
    titleKo: '호롭스',
    description: 'Game description in English',
    descriptionKo: '게임 설명 (한국어)',
    image: horropsThumbnail,
    logo: 'Game Logo',
    platforms: ['Steam', 'Nintendo Switch'],
    bgColor: 'linear-gradient(135deg, rgba(250, 152, 58, 0.1), rgba(250, 152, 58, 0.05))',
    detailInfo: {
      introduction: {
        en: 'Introduction in English',
        ko: '소개 (한국어)'
      },
      features: {
        en: ['Feature 1', 'Feature 2', 'Feature 3'],
        ko: ['특징 1', '특징 2', '특징 3']
      },
      trailer: 'https://www.youtube.com/embed/VIDEO_ID',
      screenshots: ['https://example.com/screenshot1.jpg', 'https://example.com/screenshot2.jpg']
    }
  },
  {
    id: 3,
    title: 'Nunsaram',
    titleKo: '눈사람',
    description: 'Game description in English',
    descriptionKo: '게임 설명 (한국어)',
    image: nunsaramThumbnail,
    logo: 'Game Logo',
    platforms: ['Steam', 'Nintendo Switch'],
    bgColor: 'linear-gradient(135deg, rgba(250, 152, 58, 0.1), rgba(250, 152, 58, 0.05))',
    detailInfo: {
      introduction: {
        en: 'Introduction in English',
        ko: '소개 (한국어)'
      },
      features: {
        en: ['Feature 1', 'Feature 2', 'Feature 3'],
        ko: ['특징 1', '특징 2', '특징 3']
      },
      trailer: 'https://www.youtube.com/embed/VIDEO_ID',
      screenshots: ['https://example.com/screenshot1.jpg', 'https://example.com/screenshot2.jpg']
    }
  },
]

