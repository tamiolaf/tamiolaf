
import { BUZZFEED, SEEFOOD, EQUALS_EQUALS, CODE2040, ARDUINO_IPOD, MIT_DCI } from './routes';
import seeFoodLogo from './img/SeeFood/Logos/seefood-logo.png';
import equalsEqualsLogo from './img/EqualsEquals/equalsEqualsLogo.jpg';
import buzzfeedLogo from './img/BuzzFeed/logo/BuzzFeed_Logo.png';

export const data = [
    {
        'title':'BuzzFeed',
        'year': '2019 - 2021',
        'description': 'A digital media company',
        'route': BUZZFEED,
        'displayImage': buzzfeedLogo,
        'toolsUsed':['React.js', 'Python', 'JavaScript', 'SQL'],
        'id': 'buzzfeed'
    }, 
    {
        'title': 'SeeFood',
        'year': '2017-2019',
        'description': 'A free food event calendar for students at the University of Maryland',
        'route': SEEFOOD,
        'displayImage': seeFoodLogo,
        'toolsUsed':['React.js', 'Firebase', 'Node.js'],
        'id': 'seefood'
    },
    {
        'title': 'Equals Equals',
        'year': '2018',
        'description': 'A hackathon for underrepresented minorities in tech',
        'route': EQUALS_EQUALS,
        'displayImage': equalsEqualsLogo,
        'toolsUsed': ['HTML', 'CSS'],
        'id': 'equals-equals'
    },
    {
        'title': 'Code2040',
        'year': '2018',
        'description': 'A program that connected underrepresented students in tech with internships at top tech companies',
        'route': CODE2040,
        'displayImage': '',
        'toolsUsed': ['Ruby'],
        'id': 'code2040',
    },
    {
        'title': 'MIT DCI',
        'year': '2016',
        'description': 'A program to introduce students to cryptocurrencies',
        'route': MIT_DCI,
        'displayImage': '',
        'toolsUsed': ['JavaScript, HTML, CSS'],
        'id': 'mit-dci'
    },
    {
        'title': 'Arduio iPod',
        'year': '2018',
        'description': 'Final project for my electronics class',
        'route': ARDUINO_IPOD,
        'displayImage': '',
        'toolsUsed': ['Processing', 'C++'],
        'id': 'arduino-ipod'
    },
]
