import html from '../../public/img/skill/html5.png';
import css from '../../public/img/skill/css.png';
import javascript from '../../public/img/skill/javascript.png';
import jquery from '../../public/img/skill/jquery.png';
import react from '../../public/img/skill/react.png';
import next from '../../public/img/skill/next.png';
import tailwindcss from '../../public/img/skill/tailwindcss.png';
import scss from '../../public/img/skill/scss.png';
import github from '../../public/img/skill/GitHub.png';
import php from '../../public/img/skill/php.png';
// project image
// first project
import project01_01 from '../../public/img/hangcok/project01.png';
import project01_02 from '../../public/img/hangcok/project02.png';
import project01_03 from '../../public/img/hangcok/project03.png';
import project01_04 from '../../public/img/hangcok/project04.png';
import project01_05 from '../../public/img/hangcok/project05.png';
import project01_06 from '../../public/img/hangcok/project06.png';
import project01_07 from '../../public/img/hangcok/project07.png';
import project01_08 from '../../public/img/hangcok/project08.png';

// second project
import project02_01 from '../../public/img/hangcokorder/project01.png';
import project02_02 from '../../public/img/hangcokorder/project02.png';
import project02_03 from '../../public/img/hangcokorder/project03.png';
import project02_04 from '../../public/img/hangcokorder/project04.png';
import project02_05 from '../../public/img/hangcokorder/project05.png';
import project02_06 from '../../public/img/hangcokorder/project06.png';
import project02_07 from '../../public/img/hangcokorder/project07.png';

// Third project
import project03_01 from '../../public/img/portfolio/project01.png';
import project03_02 from '../../public/img/portfolio/project02.png';
import project03_03 from '../../public/img/portfolio/project03.png';

// Fourth projecgt
import project04_01 from '../../public/img/paper2u/project03_01.png';

// Five project
import project05_01 from '../../public/img/JangheePlans/project05_01.png';
import project05_02 from '../../public/img/JangheePlans/project05_02.png';

// career
import logo01 from '../../public/img/company/logo.png';

export const headerNav = [
  {
    title: 'Intro',
    url: '#Intro',
  },
  {
    title: 'About',
    url: '#About',
  },
  {
    title: 'Skill',
    url: '#Skill',
  },
  {
    title: 'Project',
    url: '#Project',
  },
  {
    title: 'Contact',
    url: '#Contact',
  },
  {
    title: 'Career',
    url: '#Career',
  },
];

export const about = [
  {
    title: '이름',
    info: '이장희',
  },
  {
    title: '생년월일',
    info: '1997.09.24',
  },
  {
    title: '휴대폰번호',
    info: '010-9355-2242',
  },
  {
    title: '이메일',
    info: 'lwh1747@naver.com',
  },
];

export const skills = [
  {
    skill: 'HTML5',
    percentage: 90,
  },
  {
    skill: 'CSS3',
    percentage: 90,
  },
  {
    skill: 'JAVASCRIPT',
    percentage: 90,
  },
  {
    skill: 'JQUERY',
    percentage: 90,
  },
  {
    skill: 'REACT',
    percentage: 90,
  },
  {
    skill: 'Redux',
    percentage: 85,
  },
  {
    skill: 'React-Query',
    percentage: 85,
  },
  {
    skill: 'TypeScript',
    percentage: 85,
  },
  {
    skill: 'TAILWINDCSS',
    percentage: 70,
  },
  {
    skill: 'SCSS',
    percentage: 90,
  },
  {
    skill: 'GITHUB',
    percentage: 90,
  },
  {
    skill: 'Git',
    percentage: 90,
  },
  {
    skill: 'PHP',
    percentage: 30,
  },
];

export const SkillPercentage = [
  {
    percentage: 90,
    img: html,
    name: 'html5',
  },
  {
    percentage: 90,
    img: css,
    name: 'css',
  },
  {
    percentage: 80,
    img: javascript,
    name: 'javascript',
  },
  {
    percentage: 90,
    img: jquery,
    name: 'jquery',
  },
  {
    percentage: 80,
    img: react,
    name: 'react',
  },
  {
    percentage: 60,
    img: next,
    name: 'next.js',
  },
  {
    percentage: 70,
    img: tailwindcss,
    name: 'tailwindcss',
  },
  {
    percentage: 90,
    img: scss,
    name: 'scss',
  },
  {
    percentage: 90,
    img: github,
    name: 'github',
  },
  {
    percentage: 30,
    img: php,
    name: 'php',
  },
];

export const project = [
  {
    name: 'JangheePlans ( 투두리스트 & 게시판 )',
    alt: 'JangheePlans',
    img: [project05_01, project05_02],
    content01:
      'JangheePlans는 온라인 강의를 들으면서 미니 프로젝트를 진행하였으며 미니 프로젝트인 TodoList(투 두 리스트)를 React를 사용하여 제작을 하였으며, 추가로 게시판을 개발해 보았습니다.',
    content02:
      'React강의를 듣고 개인적으로 투두리스트를 만들어 보면서 React언어를 이해할 수 있게 되었으며, json-server를 사용하여 테스트용 api를 만들었으며 vercel에 배포하였을 때 배포한 파일을 변경할 수 없어서 CRUD할 때 에러(read-only file system, open "db.json")가 확인되었습니다. 문제점을 해결하기 위해 파이어베이스에 현재 프로젝트와 연동하여 배포한 환경에서도 CRUD작업을 수행할 수 있게 오류를 해결하였으며 오류를 해결해 나가는 과정에서 검색을 해보고 원인을 분석해 나갔으며 이러한 과정을 통해서 웹 서비스를 구현하려면 테스트용 api를 사용하면 위와 같은 문제점이 생기는 것을 이해할 수 있었고 해결할 수 있는 지식을 얻게 되었습니다.',
    content3:
      '추가로 사이드 프로젝트로 파이어베이스와 리액트를 사용하여 게시판을 만들어 보았으며 만들면서 React와 firebase를 조금 더 친숙하게 다룰 수 있게 되었습니다.',
    participants: '1명(본인)',
    url: 'https://lean-canvas-react-nine.vercel.app/',
    url3: 'https://github.com/goguma222/lean-canvas-react/tree/main',
    skill: ['React', 'Firebase', 'Vite', 'TailwindCss', 'git', 'github'],
    period: '2024-09-08 ~ 2024-10-08',
    function: '포트폴리오',
  },
  {
    name: 'HangcokOrder (배달,포장,예약 서비스 플렛폼)',
    alt: 'HangCokOrder',
    img: [
      project02_01,
      project02_02,
      project02_03,
      project02_04,
      project02_05,
      project02_06,
      project02_07,
    ],
    content01:
      '행콕 오더는 배달의민족 서비스를 벤치마킹한 배달, 예약(테이블), 포장 예약이 가능한 온라인 서비스 플랫폼입니다. 오더 플랫폼을 개발하게 된 계기는 온라인으로 배달, 예약(테이블), 포장 예약을 한 플랫폼에서 가능하게 하고 싶어서 개발을 하게 되었습니다.',
    content02:
      '웹 퍼블리싱 작업은 혼자 맡아서 하였으며 사내 개발자 1명과 행콕 오더 플랫폼을 소통하면서 만들었으며, 플랫폼 개발은 1차, 2차, 3차 개발로 계획이 되어있으며 현재 1차 개발까지만 완료되어 있는 상태입니다.',
    content3:
      '프로젝트를 진행하는 과정에서 jquery, javascript 언어들을 충분히 숙달할 수 있고, 백엔드와 통신을 주고 받고 하는 API통신을 해봄으로써 프론트엔드 개발 경험을 할 수 있는 좋은 계기가 되었습니다.',
    participants: '외주 개발자: 1명, 퍼블리셔 1명',
    url: 'https://hangcokorder.com',
    url2: 'https://xd.adobe.com/view/c4e48354-dacd-4c03-ae35-f3ba1f861b55-91b7/',
    skill: ['html5', 'css3', 'javascript', 'jquery'],
    period: '2024-05-21 ~ 2024-06-07',
    function: '웹 서비스',
    loginID: 'wnehs486',
    loginPW: '111111',
    explanation:
      '현재 프로젝트는 로그인을 하여만 페이지를 볼 수 있습니다. 아래 패스워드를 사용하여 로그인 해주시면 되겠습니다.',
  },
  {
    name: 'Paper2u (깨끗한나라 B2B 페이지)',
    alt: '깨끗한나라B2B',
    img: [project04_01],
    content01:
      'Paper2u(페이퍼투유)는 깨끗한나라(화장지)회사와, 자사와의 B2B 사업을 진행하기 위해 자사에서 페이지 개발을 진행하였으며 현재 깨끗한나라와 계약 협상중에 있으며, Paper2u(페이퍼투유) 페이지는 깨끗한나라의 하청업체들의 제지 수량과 제고파악을 좀 더 원활하고 실시간으로 파악하기 위해서 개발을 진행하게 되었습니다.',
    content02:
      '웹 퍼블링싱 작업은 혼자서 맡아서 하였으며 사내 개발자 1명과 퍼블리셔 1명(본인)이 개발을 진행하였으며 현재 퍼블리싱 및 개발이 전부 진행이 되었습니다.',
    content3:
      '프로젝트를 진행하면서 Jquery, Javascript 언어들을 친숙하게 다룰 수 있게 되었으며, 퍼블리싱과 프론트 개발을 진행하면서 부족한 부분을 알게 되었으며 새로운 프로젝트들을 해봄으로써 경험을 많이 쌓을 수 있게 되었습니다.',
    participants: '외주 개발자: 1명, 퍼블리셔 1명(본인)',
    url: 'https://Paper2u.co.kr',
    url2: 'https://xd.adobe.com/view/bf30ce89-135f-4b4d-a0fd-b02f15c1ee8c-ea63/',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'php'],
    period: '2024-04-08 ~ 2024-05-17',
    function: '웹 서비스',
    loginID: 'sellerid',
    loginPW: '1111',
    explanation:
      '현재 프로젝트는 로그인을 하여만 페이지를 볼 수 있습니다. 아래 패스워드를 사용하여 로그인 해주시면 되겠습니다.',
  },
  {
    name: 'HangCok 쇼핑몰',
    alt: 'HangCok',
    img: [
      project01_01,
      project01_02,
      project01_03,
      project01_04,
      project01_05,
      project01_06,
      project01_07,
      project01_08,
    ],
    content01:
      '행콕 (행사를 콕 집다!) 쇼핑몰 모바일 버전 리뉴얼 작업을 진행을 하였으며, 리뉴얼을 하게 된 이유는 사용자 경험과 인터페이스 디자인이 개선의 여지가 있었고 기존보다 더 좋은 서비스 환경을 만들기 위해 리뉴얼을 진행하게 되었습니다.',
    content02:
      '웹 퍼블리싱 작업은 혼자 진행하였으며 이 과정에서 웹 퍼블리싱 작업에 필요한 html5, css3, javascript, jquery, php등 언어를 더욱 깊게 이해할 수 있었던 계기가 되었습니다.',
    content3:
      '이 과정들을 통해 협업을 진행하는 데 있어서 기본적인 지식들을 잘 갖추어야 하는 이유를 깨달았으며 이 경험을 통해 기본을 중시하고 소통 능력을 높일 수 있었던 리뉴얼 프로젝트였습니다.',
    participants: '외주 개발자: 1명, 퍼블리셔 1명',
    url: 'https://hangcok.com?mobile=on',
    url2: 'https://xd.adobe.com/view/c9379043-60a0-4e7d-97ee-fd61dd0a8258-9c64/',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'php'],
    period: '2024-01-16 ~ 2024-03-29',
    function: '온라인 쇼핑몰',
    explanation: '현재 사이트가 정상작동되지 않습니다.',
  },
  {
    name: '이장희 포트폴리오',
    alt: '포트폴리오',
    img: [project03_01, project03_02, project03_03],
    content01:
      '현재 보고 계신 사이트는 포트폴리오 용도로 제작한 웹 사이트입니다.',
    content02:
      'gsap 라이브러리를 사용하여 ScrollTrigger 효과를 구현하였으며 그뿐만 next.js로 제작하면서 next.js로 웹 사이트 제작을 경험할 수 있어서 매우 좋은 경험이 되었습니다.',
    content3:
      '현재 페이지에서 저가 진행하였던 프로젝트들을 볼 수 있으며 앞으로 더 많은 프로젝트들을 경험해보고 업데이트를 자주하여 저 자신을 되돌아보며 성장하는 사이트로 만들겠습니다.',
    participants: '본인 1명',
    url: 'https://github.com/goguma222/my-portfolio-01',
    skill: ['html5, scss, css, next.js, react'],
    period: '2024-08-30 ~ 2024-09-06',
    function: '웹 포트폴리오',
  },
];

export const myCareer = {
  img: logo01,
  alt: '윈컴온로고',
  name: '윈컴온(주)',
  period: '2023.07 - 2024.07',
  content:
    '윈컴온은 온라인쇼핑몰 플랫폼 서비스를 운영하는 회사이며, 자체 웹 플랫폼 개발을 시도하는 스타트업 회사입니다.',
  job: '웹 퍼블리셔 직무를 맡았으며 회사 내 자체 쇼핑몰 유지보수 및 새로운 플랫폼 서비스 웹 퍼블리셔 업무를 담당하였습니다.',
};

export const JobDetails = [
  {
    name: 'HangcokOrder (배달,포장,예약 서비스 플렛폼)',
    period: '2024-05-21 ~ 2024-06-07',
    content:
      '행콕 오더는 배달의민족 서비스를 벤치마킹한 배달, 예약(테이블), 포장 예약이 가능한 온라인 서비스 플랫폼입니다. 오더 플랫폼을 개발하게 된 계기는 온라인으로 배달, 예약(테이블), 포장 예약을 한 플랫폼에서 가능하게 하고 싶어서 개발을 하게 되었습니다.',
  },
  {
    name: 'Paper2u (깨끗한나라 B2B 페이지)',
    period: '2024-04-08 ~ 2024-05-17',
    content:
      'Paper2u(페이퍼투유)는 깨끗한나라(화장지)회사와, 자사와의 B2B 사업을 진행하기 위해 자사에서 페이지 개발을 진행하였으며 현재 깨끗한나라와 계약 협상중에 있으며, Paper2u(페이퍼투유) 페이지는 깨끗한나라의 하청업체들의 제지 수량과 제고파악을 좀 더 원활하고 실시간으로 파악하기 위해서 개발을 진행하게 되었습니다.',
  },
  {
    name: 'HangCok 쇼핑몰',
    period: '2024-01-16 ~ 2024-03-29',
    content:
      '행콕 (행사를 콕 집다!) 쇼핑몰 모바일 버전 리뉴얼 작업을 진행을 하였으며, 리뉴얼을 하게 된 이유는 사용자 경험과 인터페이스 디자인이 개선의 여지가 있었고 기존보다 더 좋은 서비스 환경을 만들기 위해 리뉴얼을 진행하게 되었습니다.',
  },
];
