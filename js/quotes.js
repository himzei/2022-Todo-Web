const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다.",
    author: "로망로랑",
  },
  {
    quote:
      " 직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다.",
    author: "켄러",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스다윈",
  },
  {
    quote: "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라 .",
    author: "에픽토테스",
  },
  {
    quote: "오늘은 당신의 남은 인생 중, 첫 번째 날이다.",
    author: "영화 ‘아메리칸 뷰티’ 中",
  },
  {
    quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
    author: "미상",
  },
  {
    quote: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
    author: "미상",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;
