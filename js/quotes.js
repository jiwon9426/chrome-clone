const quotes = [
  {
    quote:
      "컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 것을 대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다.",
    author: "Paul Leary",
  },
  {
    quote:
      "‘컴퓨터가 생각할 수 있을까?’이렇게 묻는 것은 ‘잠수함이 물 속을 다닐 수 있을까?’라고 묻는 것과 같다.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote:
      "100년을 살면서 단지 300 MB 밖에 기억하지 못하는 건 너무 가혹하다. CD 한 장보다 못하지 않나? 인간의 조건은 정말 점점 더 초라해지고 있다.",
    author: "Marvin Minsky",
  },
  {
    quote: "창 밖으로 집어던질 수 없는 컴퓨터는 절대 믿지 마라.",
    author: "Steve Wozniak",
  },
  {
    quote:
      "모든 특허는 헛소리다. 그것을 읽느라 시간을 낭비할 필요가 없다. 왜냐하면 특허란 소유권자가 그렇게 할거냐 아니냐에 좌우되기 때문이다.",
    author: "Linus Torvalds",
  },
  {
    quote:
      "컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 것을 대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다.",
    author: "Paul Leary",
  },
  {
    quote:
      "‘컴퓨터가 생각할 수 있을까?’이렇게 묻는 것은 ‘잠수함이 물 속을 다닐 수 있을까?’라고 묻는 것과 같다.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote:
      "100년을 살면서 단지 300 MB 밖에 기억하지 못하는 건 너무 가혹하다. CD 한 장보다 못하지 않나? 인간의 조건은 정말 점점 더 초라해지고 있다.",
    author: "Marvin Minsky",
  },
  {
    quote: "창 밖으로 집어던질 수 없는 컴퓨터는 절대 믿지 마라.",
    author: "Steve Wozniak",
  },
  {
    quote:
      "모든 특허는 헛소리다. 그것을 읽느라 시간을 낭비할 필요가 없다. 왜냐하면 특허란 소유권자가 그렇게 할거냐 아니냐에 좌우되기 때문이다.",
    author: "Linus Torvalds",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
