import * as images from '../../assets/img/repos';
import * as imagesTwo from '../../assets/img/projects';

const PERSONAL = 'personal';
const CAREER = 'career';

export default [
  {
    name: 'Good Knaps',
    org: 'rohantalkad747',
    orgLink: 'https://github.com/rohantalkad747',
    orgImage: images.goodknap,
    date: new Date(2019, 3, 29),
    type: PERSONAL,
    url: 'https://github.com/rohantalkad747/knap-site',
    repoUrl: 'https://github.com/rohantalkad747/knap-site',
    projectImage: imagesTwo.gk,
    tags: ['angular', 'nodejs', 'stripe', 'express', 'mongodb', 'jquery'],
    description: 'An E-Commerce web store that is dedicated towards the sale of flint knapping products. This project utilizes MongoDB and NodeJS for database storage (for user storage and order routing), NodeMailer for sending e-mails, and Stripe for its checkouts. I used the Angular 6 framework for the Client side.',
  },
  {
    name: 'Lassonde Bootcamp Activity Website',
    org: 'Lassonde School of Engineering',
    orgLink: 'https://lassonde.yorku.ca/',
    orgImage: images.lass,
    date: new Date(2019, 5, 9),
    type: CAREER,
    url: 'https://lassondebootcamp.netlify.com/',
    repoUrl: 'https://github.com/rohantalkad747/lassonde_rovers',
    projectImage: imagesTwo.rt,
    tags: ['nodejs', 'express', 'typescript', 'angular 6', 'bootstrap', 'html', 'css'],
    description: `
      Bootcamp activity website for incoming first-year students at Lassonde School of Engineering. This site contains slides, Arduino references, and instructions on completing the Arduino robot activity. It also features a feedback system which is implemented with Nodemailer and Express.
    `,
  },
  {
    name: 'Talkbox',
    org: 'Malek, Mastrofrancesco, and Talkad',
    orgLink: 'https://piet.apps01.yorku.ca/',
    orgImage: images.talkbox,
    date: new Date(2019, 2, 29),
    type: CAREER,
    url: 'https://github.com/rohantalkad747/Talkbox',
    repoUrl: 'https://github.com/rohantalkad747/Talkbox',
    projectImage: imagesTwo.tb,
    tags: ['java', 'html', 'css', 'swing'],
    description: `
      A virtual lexigram touchpad for those with vocal disabilities to communicate. The user can configure the touchpad to their needs with pre-recorded audio clips. An alternative to the expensive and obtrusive hardware-based touchpads, Talkbox is free of charge and highly customizable, enabling a wide variety of people with disabilities to communicate effectively with emojis and images.
    `,
  },
  {
    name: 'Farmout',
    org: 'rohantalkad747',
    orgLink: 'https://github.com/rohantalkad747',
    orgImage: images.farmout,
    date: new Date(2019, 0, 12),
    type: PERSONAL,
    url: 'https://github.com/rohantalkad747/FarmOut',
    projectImage: imagesTwo.order,
    tags: ['flask', 'html', 'css', 'jquery', 'python', 'nodejs', 'sql', 'recast.ai'],
    description: `
     FarmOut out is a web application that allows small-scale farmers to automate their selling process. An automated chat bot handles orders which are routed to a to-do dashboard. This is an efficient alternative to texts and phone calls which are inconvenient to both the consumer and producer. This HackLassonde 2019 project thus aims to streamline this selling process.
    `,
  },
  {
    name: 'Genome Parse',
    org: 'rohantalkad747',
    orgLink: 'https://github.com/rohantalkad747',
    orgImage: images.gp,
    date: new Date(2019, 1, 12),
    type: PERSONAL,
    url: 'https://github.com/rohantalkad747/GenomeParse',
    projectImage: imagesTwo.gp,
    tags: ['java', 'jcommander', 'swing'],
    description: `
     GenomeParse is a graphical UI and CLI program to find and quickly analyze large sets of genome files for genetic variants. Analysis of frequency data is provided instantly. This is helpful in identifying variants related to certain phenotypes
    `,
  },
  {
    name: 'Wildlife Clock',
    org: 'rohantalkad747',
    orgLink: 'https://github.com/rohantalkad747',
    orgImage: images.wild,
    date: new Date(2018, 4, 12),
    type: PERSONAL,
    url: 'https://github.com/rohantalkad747/WildLifeClock',
    projectImage: imagesTwo.alarm,
    tags: ['android'],
    description: `
     An alarm clock with only natural sounds. A library of bird songs from blue jays and robins is available for the user to choose. This is an alternative to the chaotic alarm clock sounds provided by the native alarm clock application
    `,
  },
  {
    name: 'Chromosome Visualizer',
    org: 'rohantalkad747',
    orgLink: 'https://github.com/rohantalkad747',
    orgImage: images.chrom,
    date: new Date(2018, 1, 12),
    type: PERSONAL,
    url: 'https://github.com/rohantalkad747/ChromosomeVisualization',
    projectImage: imagesTwo.vis,
    tags: ['python'],
    description: `
     Designed and built a program that allows one to map markers to chromosomes, chromosomes to positions, set memory nucleotides, and compare one animal’s genome to another. Utility classes for genomic operations such as setting memory nucleotides, codons, and splicing are included.
    `,
  },
  {
    name: 'AVL Tree Map Implementation',
    org: 'rohantalkad747',
    orgLink: 'https://github.com/rohantalkad747',
    date: new Date(2019, 3, 12),
    type: PERSONAL,
    url: 'https://github.com/rohantalkad747/AVL-TreeMap',
    projectImage: imagesTwo.map,
    tags: ['java'],
    description: `
     Implementation of the Java TreeMap API using the AVL data structure.
    `,
  },
];
