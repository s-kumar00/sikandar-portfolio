import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { SiCodechef, SiGeeksforgeeks, SiHackerrank, SiLeetcode, SiTwitter } from 'react-icons/si'

const socialProfiles = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sikandar-kumar-b1a961223/',
    icon: <BsLinkedin />
  },
  {
    id: 2,
    name: 'Github',
    link: 'https://github.com/s-kumar00',
    icon: <FaGithub />
  },
  {
    id: 3,
    name: 'Instagram',
    link: 'https://www.instagram.com/sikku_a6/',
    icon: <FiInstagram />
  },
  {
    id: 4,
    name: 'Twitter',
    link: 'https://x.com/Sikandarku62065',
    icon: <SiTwitter />
  }
]

const codingProfiles = [
  {
    id: 1,
    name: 'Leetcode',
    link: 'https://leetcode.com/u/sikandarsahilkumar/',
    icon: <SiLeetcode />
  },
  {
    id: 2,
    name: 'Codechef',
    link: 'https://www.codechef.com/users/sikandar01',
    icon: <SiCodechef />
  },
  {
    id: 3,
    name: 'Geeksforgeeks',
    link: 'https://www.geeksforgeeks.org/user/sikandarsahilkumar/',
    icon: <SiGeeksforgeeks />
  },
  {
    id: 4,
    name: 'Hackerrank',
    link: 'https://www.hackerrank.com/profile/sikandarsahilku1',
    icon: <SiHackerrank />
  }
]

export { socialProfiles, codingProfiles }
