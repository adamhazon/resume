import { Role } from '../models/role.model';

export const RolesMock: Role[] = [
  {
    id: 1,
    position: 'Senior Software Engineer',
    company: 'Seerene Inc',
    startDate: '2017-05',
    endDate: '2018-12',
    current: false,
    description: `
      • Worked in a SCRUM team, mainly on the Front-end side using Angular 4-6.
      • Developed new features, improved old features and fixed some bugs.
      • Developed from scratch the new version of the platform with Angular CLI & NgRx.
      • All the styling guideline was implemented using Angular Material 2 and FlexBox.
      • I worked closely with the design team to make sure everything looks and feels clean, consistent and
        professional.
      • I was part of the PERFORMANCE TEAM and I improved a lot the UX & FE speed.
    `
  },
  {
    id: 2,
    position: 'Senior Full-Stack Ruby on Rails Engineer',
    company: 'Cambridge Editing',
    startDate: '2016-12',
    endDate: '2017-04',
    current: false,
    description: `
      • Work directly with the CTO, CEO, and co-founders.
      • Design and develop a new ordering system and a pricing engine from scratch.
      • Implement payment system with Paymill, Paypal & Sofort.
      • Support multi-language interfaces and geolocation.
      • Test new features and deploy to Heroku server almost on a daily basis.
    `
  },
  {
    id: 3,
    position: 'Team Lead Website Development',
    company: 'Quandoo GmbH',
    startDate: '2016-03',
    endDate: '2016-09',
    current: false,
    description: `
      • Guide, teach and manage 6 team members.
      • Communicate, guide and support Partner Managers from 11 different countries.
      • Designed & Developed 18 new professional Wordpress templates & Plugins.
      • Improved work process and quality of products.
      • Responsible for the B2B website of the company.
    `
  }
];
