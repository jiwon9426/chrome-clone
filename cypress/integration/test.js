//프로젝트 위치로 가서, npx cypress opne 으로 실행함.

//1단계. 페이지방문
describe("First Test", () => {
  if (
    ("visit my test",
    () => {
      cy.visit("https://jiwon9426.github.io/chrome-clone/");

      //2단계. 요소쿼리(페이지에서 테스트할 코드를 작성)
      cy.contains("Log In").click(); //3단계 요소 클릭

      //4단계. Assertion 만들기
      cy.get("#login-form").type("Test");
      cy.contains("Log In").click();

      cy.get("#greeting").contains("Test");
    })
  );
});
