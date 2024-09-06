import html from "../assets/img/skill/html5.png";
import css from "../assets/img/skill/css.png";
import javascript from "../assets/img/skill/javascript.png";
import jquery from "../assets/img/skill/jquery.png";
import react from "../assets/img/skill/react.png";
import next from "../assets/img/skill/next.png";
import tailwindcss from "../assets/img/skill/tailwindcss.png";
import scss from "../assets/img/skill/scss.png";
import github from "../assets/img/skill/GitHub.png";
import php from "../assets/img/skill/php.png";
// project image
// first project
import project01_01 from "../assets/img/hangcok/project01.png";
import project01_02 from "../assets/img/hangcok/project02.png";
import project01_03 from "../assets/img/hangcok/project03.png";
import project01_04 from "../assets/img/hangcok/project04.png";
import project01_05 from "../assets/img/hangcok/project05.png";
import project01_06 from "../assets/img/hangcok/project06.png";
import project01_07 from "../assets/img/hangcok/project07.png";
import project01_08 from "../assets/img/hangcok/project08.png";

// second project
import project02_01 from "../assets/img/hangcokorder/project01.png";
import project02_02 from "../assets/img/hangcokorder/project02.png";
import project02_03 from "../assets/img/hangcokorder/project03.png";
import project02_04 from "../assets/img/hangcokorder/project04.png";
import project02_05 from "../assets/img/hangcokorder/project05.png";
import project02_06 from "../assets/img/hangcokorder/project06.png";
import project02_07 from "../assets/img/hangcokorder/project07.png";

// Third project
import project03_01 from "../assets/img/portfolio/project01.png";
import project03_02 from "../assets/img/portfolio/project02.png";
import project03_03 from "../assets/img/portfolio/project03.png";

// career
import logo01 from "../assets/img/company/logo.png";

export const headerNav = [
  {
    title: "Intro",
    url: "#Intro",
  },
  {
    title: "About",
    url: "#About",
  },
  {
    title: "Skill",
    url: "#Skill",
  },
  {
    title: "Project",
    url: "#Project",
  },
  {
    title: "Contact",
    url: "#Contact",
  },
  {
    title: "Career",
    url: "#Career",
  }
];

export const about = [
  {
    title: "이름",
    info: "이장희",
  },
  {
    title: "생년월일",
    info: "1997.09.24",
  },
  {
    title: "휴대폰번호",
    info: "010-9355-2242",
  },
  {
    title: "이메일",
    info: "lwh1747@naver.com",
  },
];

export const skills = [
  {
    skill: "HTML5",
    percentage: 90,
  },
  {
    skill: "CSS3",
    percentage: 90,
  },
  {
    skill: "JAVASCRIPT",
    percentage: 80,
  },
  {
    skill: "JQUERY",
    percentage: 90,
  },
  {
    skill: "REACT",
    percentage: 80,
  },
  {
    skill: "NEXT.JS",
    percentage: 80,
  },
  {
    skill: "TAILWINDCSS",
    percentage: 70,
  },
  {
    skill: "SCSS",
    percentage: 90,
  },
  {
    skill: "GITHUB",
    percentage: 90,
  },
  {
    skill: "PHP",
    percentage: 30,
  },
];

export const SkillPercentage = [
  {
    percentage: 90,
    img: html,
    name: "html5",
  },
  {
    percentage: 90,
    img: css,
    name: "css",
  },
  {
    percentage: 80,
    img: javascript,
    name: "javascript",
  },
  {
    percentage: 90,
    img: jquery,
    name: "jquery",
  },
  {
    percentage: 80,
    img: react,
    name: "react",
  },
  {
    percentage: 80,
    img: next,
    name: "next.js",
  },
  {
    percentage: 70,
    img: tailwindcss,
    name: "tailwindcss",
  },
  {
    percentage: 90,
    img: scss,
    name: "scss",
  },
  {
    percentage: 90,
    img: github,
    name: "github",
  },
  {
    percentage: 30,
    img: php,
    name: "php",
  },
];

export const project = [
  {
    name: "HangCok 쇼핑몰",
    alt: "HangCok",
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
      "행콕 (행사를 콕 집다!) 쇼핑몰 모바일 버전 리뉴얼 작업을 진행을 하였으며, 리뉴얼을 하게 된 이유는 사용자 경험과 인터페이스 디자인이 개선의 여지가 있었고 기존보다 더 좋은 서비스 환경을 만들기 위해 리뉴얼을 진행하게 되었습니다.",
    content02:
      "웹 퍼블리싱 작업은 혼자 진행하였으며 이 과정에서 웹 퍼블리싱 작업에 필요한 html5, css3, javascript, jquery, php등 언어를 더욱 깊게 이해할 수 있었던 계기가 되었습니다.",
    content3:
      "이 과정들을 통해 협업을 진행하는 데 있어서 기본적인 지식들을 잘 갖추어야 하는 이유를 깨달았으며 이 경험을 통해 기본을 중시하고 소통 능력을 높일 수 있었던 리뉴얼 프로젝트였습니다.",
    participants: "외주 개발자: 1명, 퍼블리셔 1명",
    url: "https://hangcok.com?mobile=on",
    skill: ["html5", "css3", "javascript", "jquery", "php"],
    period: "2024-01-16 ~ 2024-05-01",
    function: "온라인 쇼핑몰",
  },
  {
    name: "HangcokOrder (배달,포장,예약 서비스 플렛폼)",
    alt: "HangCokOrder",
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
      "행콕 오더는 배달의민족 서비스를 벤치마킹한 배달, 예약(테이블), 포장 예약이 가능한 온라인 서비스 플랫폼입니다. 오더 플랫폼을 개발하게 된 계기는 온라인으로 배달, 예약(테이블), 포장 예약을 한 플랫폼에서 가능하게 하고 싶어서 개발을 하게 되었습니다.",
    content02:
      "웹 퍼블리싱 작업은 혼자 맡아서 하였으며 사내 개발자 1명과 행콕 오더 플랫폼을 소통하면서 만들었으며, 플랫폼 개발은 1차, 2차, 3차 개발로 계획이 되어있으며 현재 1차 개발까지만 완료되어 있는 상태입니다.",
    content3:
      "프로젝트를 진행하는 과정에서 jquery, javascript 언어들을 충분히 숙달할 수 있고, 백엔드와 통신을 주고 받고 하는 API통신을 해봄으로써 프론트엔드 개발 경험을 할 수 있는 좋은 계기가 되었습니다.",
    participants: "외주 개발자: 1명, 퍼블리셔 1명",
    url: "https://hangcokorder.com",
    skill: ["html5", "css3", "javascript", "jquery"],
    period: "2024-05-21 ~ 2024-06-07",
    function: "웹 서비스",
  },
  {
    name: "이장희 포트폴리오",
    alt: "포트폴리오",
    img: [
      project03_01,
      project03_02,
      project03_03,
    ],
    content01:
      "현재 보고 계신 사이트는 포트폴리오 용도로 제작한 웹 사이트입니다.",
    content02:
      "gsap 라이브러리를 사용하여 ScrollTrigger 효과를 구현하였으며 그뿐만 next.js로 제작하면서 next.js로 웹 사이트 제작을 경험할 수 있어서 매우 좋은 경험이 되었습니다.",
    content3:
      "현재 페이지에서 저가 진행하였던 프로젝트들을 볼 수 있으며 앞으로 더 많은 프로젝트들을 경험해보고 업데이트를 자주하여 저 자신을 되돌아보며 성장하는 사이트로 만들겠습니다.",
    participants: "본인 1명",
    url: "https://github.com/goguma222/my-portfolio-01",
    skill: ["html5, scss, css, next.js, react"],
    period: "2024-08-30 ~ 2024-09-06",
    function: "웹 포트폴리오",
  },
];

export const myCareer = {
    img: logo01,
    alt: "윈컴온로고",
    name: "윈컴온(주)",
    period: "2023.07 - 2024.06",
    content:
      "윈컴온은 온라인쇼핑몰 플랫폼 서비스를 운영하는 회사이며, 자체 웹 플랫폼 개발을 시도하는 스타트업 회사입니다.",
    job: "웹 퍼블리셔 직무를 맡았으며 회사 내 자체 쇼핑몰 유지보수 및 새로운 플랫폼 서비스 웹 퍼블리셔 업무를 담당하였습니다.",
};

export const JobDetails = [
  {
    name: "행콕쇼핑몰",
    period: "2024-01-16 ~ 2024-05-01",
    content: "행콕 (행사를 콕 집다!) 쇼핑몰 모바일 버전 리뉴얼 작업을 진행을 하였으며, 리뉴얼을 하게 된 이유는 사용자 경험과 인터페이스 디자인이 개선의 여지가 있었고 기존보다 더 좋은 서비스 환경을 만들기 위해 리뉴얼을 진행하게 되었습니다."
  },
  {
    name: "행콕오더",
    period: "2024-05-21 ~ 2024-06-07",
    content: "행콕 오더는 배달의민족 서비스를 벤치마킹한 배달, 예약(테이블), 포장 예약이 가능한 온라인 서비스 플랫폼입니다. 오더 플랫폼을 개발하게 된 계기는 온라인으로 배달, 예약(테이블), 포장 예약을 한 플랫폼에서 가능하게 하고 싶어서 개발을 하게 되었습니다."
  }
]

