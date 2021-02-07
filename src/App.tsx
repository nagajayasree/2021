import "./App.css";
import { Car, Home, Name, Pet, MyComponent, MyName } from "./topics/funcComps";
import { Counter, GetName, Status, ToggleButton } from "./topics/useStateHook";
import { ReducerCounter } from "./topics/useReducerHook";
import { Delay } from "./topics/useEffectHook";
import { MsgComp } from "./topics/classComps";
import Time from "./topics/classComps";
import { Age, DefaultName, Greet, Msg, MyFruit } from "./topics/defaultProps";
import { Form, SubmitButton } from "./topics/formEvents";
import { SumOfArrNum } from "./exercises/sumofArrayNums";
import { GetPositiveNums } from "./exercises/positiveNumbers";
import { GetMaxNum } from "./exercises/getMaxNum";
import { Capitalize } from "./exercises/capitialize";
import { Animal } from "./exercises/animal";
import { CheckPalindrome } from "./exercises/palindrome";
import { GetUserName, User } from "./topics/context";
import { Student, Book, Book2 } from "./topics/context2";
import { Person, Person2, PersonProps } from "./topics/context3";
import { GetPrimes } from "./exercises/primeNumbers";
import { Input, FancyButton } from "./topics/forwardRef";
import { CapEachWord } from "./exercises/capEachWord";
import { AdjElemProd } from "./exercises/adjElemProd";
import { Modal, PortalButton } from "./topics/portal";
import { PopUp } from "./exercises/popUp";
import { Main } from "./practice/Hook/Main";
import { LoginForm } from "./practice/Classes/LoginForm";
import { MainComp } from "./practice/Classes/main";
import { Todo } from "./practice/Todo/Todo";
import { Calculator } from "./practice/Calculator/calculator";
import { Items } from "./practice/eCommerce/ListItems";
import { CartItems, Cart } from "./practice/eCommerce/CartItems";
function App() {
  return (
    <div className="App">
      {/* <Name firstName="FirstName">Get Name</Name>
      <Car name="Alto">Car Details</Car>
      <Pet name="browny" />
      <Home name="XYZ" place="Place">
        My Home
      </Home>
      <MyComponent name="name">MyComponent</MyComponent>
      <MyName />
      <Status isActive={false} />
      <ToggleButton button={true} />
      <GetName name="njs" />
      <Counter value={0}>Counter</Counter>
      <ReducerCounter />
      <Delay msg={`Hello Hooks`} timeInMs={5000} />
      <MsgComp title={"Send Message"} />
      <Time />
      <Msg />
      <Greet />
      <DefaultName />
      <Age />
      <MyFruit />
      <Form />
      <SubmitButton btnName={"Submit"} /> */}
      {/* <SumOfArrNum inputArr={[1, 2, 3, 14]} />
      <GetPositiveNums inputArr={[-18, 73, 45, -64]} />
      <GetMaxNum inputArr={[32, 45, 61, 100, 10, 89]} />
      <Capitalize inputStr={"typescript"} />
      <Animal name={"puppy"} age={5} legs={4} status={"barking"} />
      <CheckPalindrome inputStr={"madam"} />
      <CheckPalindrome inputStr={"window"} />
      <User />
      <GetUserName />
      <Student />
      <Book />
      <Book2 />
      <Person />
      <Person2 />
      <PersonProps name={"nameProp"} age={28} place={"placeProp"} />
      <GetPrimes inputArr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <FancyButton type={"button"}>Ref Button</FancyButton>
      <Input />
      <CapEachWord str={"hello world"} />
      <AdjElemProd inputArr={[1, 2, -8, 3, 4]} />
      <Modal>Portal</Modal>
      <PortalButton>Button in modalRoot</PortalButton>
      <PopUp /> */}
      {/* <UserLogin /> */}
      {/* <Main /> */}
      {/* <MainComp /> */}
      <Todo />
      <Calculator />
      <Items />
      <CartItems />
      <Cart />
    </div>
  );
}

export default App;
