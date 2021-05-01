
import { BUZZFEED, SEEFOOD, /*MIT_DCI,*/ EQUALS_EQUALS, /*CODE2040, ARDUINO_IPOD*/ } from './routes';
import seeFoodLogo from './img/SeeFood/Logos/SeeFoodLogo.png';
import equalsEqualsLogo from './img/EqualsEquals/equalsEqualsLogo.jpg';
import buzzfeedLogo from './img/BuzzFeed/logo/BuzzFeed_Logo.png';

export const data = [
    {
        'title':'BuzzFeed',
        'year': '2019 - Present',
        'description': 'A digital media company',
        'route': BUZZFEED,
        'displayImage': buzzfeedLogo,
        'toolsUsed':[],
        'id': 'buzzfeed'
    }, 
    {
        'title': 'SeeFood',
        'year': '2017-2019',
        'description': 'A free food event calendar for students at the University of Maryland',
        'route': SEEFOOD,
        'displayImage': seeFoodLogo,
        'toolsUsed':[],
        'id': 'seefood'
    },
    {
        'title': 'Equals Equals',
        'year': '2018',
        'description': 'A hackathon for underrepresented minorities in tech',
        'route': EQUALS_EQUALS,
        'displayImage': equalsEqualsLogo,
        'toolsUsed': [],
        'id': 'equals-equals'
    }/*,
    {
        'title': 'Code2040',
        'year': '2018',
        'description': 'A program that connected underrepresented students in tech with internships at top tech companies',
        'route': CODE2040,
        'displayImage': '',
        'toolsUsed': ['ruby'],
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
        'toolsUsed': [],
        'id': 'arduino-ipod'
    }*/
]
