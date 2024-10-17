import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // Console.readLineAsync를 이용하여 문자열 입력값을 받는다.
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

      // 입력값을 입력하지 않은경우 "[ERROR] 입력값을 입력하지 않았습니다." 라는 메시지와 함께 앱을 종료시킨다.
      if (input.length===0){
        MissionUtils.Console.print('[ERROR] 입력값을 입력하지 않았습니다.');
        return
      }
      //유효한 입력인지 검사
      if (isValid(input)){
        // 유효한 입력값일 경우, 계산하는 함수를 실행한다.
        calculate()
      }else{
        // 사용자가 잘못된값을 입력한경우 "[ERROR] 잘못된 값을 입력하셨습니다."라는 메시지와 함께 앱을 종료시킨다
        MissionUtils.Console.print('[ERROR] 잘못된 값을 입력하셨습니다.');
        return
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR]:${error}`);
    }
    
    // 계산 결과를 출력한다.
    MissionUtils.Console.print('계산성공')
  }
  //유효값을 계산하는함수
  isValid(){
    // 구분자 배열을 만든다. [',', ':']
    // 커스텀 구분자가 있는 지 확인한다.
    // 커스텀 구분자가 있을시  (//)와 (\n) 사이에 있는 커스텀 구분자를 구분자 배열에 추가한다.
    // 입력값에서 커스텀 구분자를 제거한다.
    //[',', ':', '(//)와 (\n) 사이에 있는 커스텀 구분자']를 제외한 구분자를 입력한 경우 "[ERROR] 구분자를 잘못 입력하셨습니다."라는 메시지와 함께 앱을 종료시킨다.
    MissionUtils.Console.print('[ERROR] 잘못된 값을 입력하셨습니다.');
  }
  
  // 입력값을 계산하는 함수
  calculate() {
    // 구분자를 기준으로 숫자들을 분리한다.
    // 숫자 중 음수가 있는지 체크한다.
    // 입력값중 숫자가 음수일경우 "[ERROR] 음수의 값을 입력하셨습니다."라는 메시지와 함께 앱을 종료시킨다.
    // 양수이면 합산한다.
    // 최종 합산된 값을 반환한다.
  }
}


export default App;
