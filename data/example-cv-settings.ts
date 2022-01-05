import { Cv } from '~/types/cvfy';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Nutritional Sciences',
  name: 'Max',
  photo: '',
  displayPhoto: true,
  lastName: 'Muster',
  email: 'max@mustermann.de',
  location: 'Nuremberg, Bavaria',
  phoneNumber: '(0911) 8751627',
  aboutme:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  jobSkills: ['Nutrition', 'Health Management', 'Public Management'],
  softSkills: [
    'Positivity',
    'Leadership',
    'Public Speaking',
    'Nutritional Sciences',
  ],
  additionalSkills: ['Word', 'Excel', 'Powerpoint', 'Google Tool Suite'],
  hobbySkills: ['Running', 'Fitness', 'Hip Hop'],
  languages: [
    { lang: 'English', level: '100%' },
    { lang: 'German', level: '100%' },
    { lang: 'French', level: '60%' },
  ],
  xing: '',
  instagram: '',
  linkedin: 'max-mustermann',
  twitter: 'max-mustermann',
  github: '',
  website: 'www.max-mustermann.de',
  education: [
    {
      title: 'A Environmental and Public Affairs',
      location: 'Indiana University, Bloomington, Indiana',
      from: new Date(1993, 9, 1),
      to: new Date(1993, 4, 1),
      current: false,
      summary:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. sam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ame.',
    },
    {
      title: 'Health Care Institute',
      location: 'International Research University',
      from: new Date(1994, 2, 1),
      to: new Date(1993, 10, 5),
      current: false,
      summary:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    },
  ],
  work: [
    {
      title: 'Deputy Director Parks Department',
      location: 'City of Pawnee, Indiana',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: `- Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
    {
      title: 'City Councilor',
      location: 'City of Pawnee, Indiana',
      from: new Date(2020, 1, 1),
      to: new Date(),
      current: true,
      summary: `- In placerat nisi pellentesque felis blandit, vel varius justo eleifend.
- Etiam porttitor tortor vel lobortis ultricies.
- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.
- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.
- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.`,
    },
  ],
  projects: [
    {
      title: 'Lot 48',
      location: 'City of Pawnee, Indiana',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: `- Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
    {
      title: 'Nutritonal Survey',
      location: 'City of Pawnee, Indiana',
      from: new Date(2020, 2, 2),
      to: new Date(2021, 5, 10),
      current: false,
      summary: `- In placerat nisi pellentesque felis blandit, vel varius justo eleifend.
- Etiam porttitor tortor vel lobortis ultricies.
- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.
- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.
- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.`,
    },
    {
      title: 'Study Plan',
      location: 'City of Pawnee, Indiana',
      from: new Date(2020, 5, 1),
      to: new Date(2021, 6, 2),
      current: false,
      summary: `- In placerat nisi pellentesque felis blandit, vel varius justo eleifend.
- Etiam porttitor tortor vel lobortis ultricies.
- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.
- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.
- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.`,
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#5B21B6',
  coverLetter:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.\n',
  displaySocial: true,
};

export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  photo: '',
  displayPhoto: false,
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  hobbySkills: [],
  languages: [],
  xing: '',
  instagram: '',
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  work: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  projects: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  displayEducation: true,
  displayProjects: false,
  coverLetter: '',
  activeColor: '#5B21B6',
  additionalSkills: [],
  displaySocial: false,
};
