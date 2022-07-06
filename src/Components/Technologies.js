import React, { useEffect, useState } from "react";
import ContactFooter from "./ContactFooter";
import GetQuote from "./GetQuote";
import Home from "./Home";
import java from "../img/Java Icon.svg";
import python from "../img/Python Icon.svg";
import android from "../img/Android Icon.svg";
import angular from "../img/Angular Icon.svg";
import ba from "../img/BA Icon.svg";
import dev from "../img/Dev Ops Icon.svg";
import dotnet from "../img/Dot Net Icon.svg";
import flutter from "../img/Flutter Icon.svg";
import golang from "../img/Golang Icon.svg";
import html from "../img/HTML Icon.svg";
import ionic from "../img/Ionic Icon.svg";
import ios from "../img/iOS Icon.svg";
import node from "../img/Node JS Icon.svg";
import php from "../img/PHP Icon.svg";
import qa from "../img/QA Icon.svg";
import react from "../img/React JS Icon.svg";
import reactNative from "../img/React Native Icon.svg";
import ui from "../img/UI-UX Icon.svg";
import vue from "../img/Vue JS Icon.svg";
import wordpress from "../img/Wordpress Icon.svg";
import database from "../img/Database Icon.svg";

export default function Technologies() {
  const[Java, setJava]=useState(0);
  const[Python, setPython]=useState(0);
  const[DotNet, setDotNet]=useState(0);
  const[Golang, setGolang]=useState(0);
  const[Node, setNode]=useState(0);
  const[Php, setPhp]=useState(0);
  const[ReactJs, setReactJs]=useState(0);
  const[Angular, setAngular]=useState(0);
  const[Html, setHtml]=useState(0);
  const[Vue, setVue]=useState(0);
  const[Wordpress, setWordpress]=useState(0);
  const[Android, setAndroid]=useState(0);
  const[Ios, setIos]=useState(0);
  const[Ionic, setIonic]=useState(0);
  const[Flutter, setFlutter]=useState(0);
  const[ReactNative, setReactNavtive]=useState(0);
  const[Ui, setUi]=useState(0);
  const[Database, setDatabase]=useState(0);
  const[Ba, setBa]=useState(0);
  const[Qa, setQa]=useState(0);
  const[QaAuto, setQaAuto]=useState(0);
  const[Dev, setDev]=useState(0);
  const [form, setForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handelReset=()=>{
    setJava(0);
    setPython(0);
    setDotNet(0);
    setGolang(0);
    setNode(0);
    setNode(0);
    setPhp(0);
    setReactJs(0);
    setAngular(0);
    setHtml(0);
    setVue(0);
    setWordpress(0);
    setAndroid(0);
    setIos(0);
    setIonic(0);
    setFlutter(0);
    setReactNavtive(0);
    setDatabase(0)
    setBa(0);
    setQa(0);
    setQaAuto(0);
    setDev(0);
    setUi(0);
  }

  const getState=()=>{
    const allState={
       'Java':Java,
      'Python':Python,
      'DoteNet':DotNet,
      'Golang':Golang,
      'Node':Node,
      'PHP':Php,
      'React Js':ReactJs,
      'Angular':Angular,
      'Html':Html,
      'Vue Js':Vue,
      'Wordpress':Wordpress,
      'Android':Android,
      'iOS':Ios,
      'Ionic':Ionic,
      'Flutter':Flutter,
      'React Native':ReactNative,
      'UI/UX':Ui,
      'Data Base':Database,
      'QA':Qa,
      'BA':Ba,
      'QA Auto':QaAuto,
      'Dev':Dev}

     var sendState=[];

      for(let selectState in allState){
        if(allState[selectState] > 0){
          sendState.push(selectState,allState[selectState]);
        }
      }
      return sendState;
  }
  useEffect(()=>{
   getState(); 
  })
const data=getState();

  const openModal = () => {
    setIsOpen(true);
    setForm(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setForm(false);
  };

  return (
    <>
      {form ? "" : <Home />}
      {isOpen && (
        <GetQuote closeModal={closeModal} form={form} isOpen={isOpen} data={data} />
      )}
      <div className="tech-container" id="select">
        <div className="md-heading">
          <h2>Select Technologies</h2>
        </div>
        <div className="md-btn">
          <button className="reset" onClick={handelReset}>
            Reset
          </button>
          <a href="#nav" className='grad' onClick={openModal}>
              Get Quote
          </a>
        </div>
      </div>
      <div className="teachnologies">
        <h2>Backend Teachnologies</h2>
        <div className="backend-container">
          <div className="backend-box">
            <div className="logo java-logo">
              <img src={java} alt="Java-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Java</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelJavaRemove(){
                  return( Java > 0 ? setJava(Java - 1) : " ");
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count">{Java}</span>
                <span onClick={function handelJavaAdd(){
                  return setJava(Java + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo python-logo">
              <img src={python} alt="python-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Python</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelPythonRemove(){
                  return Python > 0 ? setPython(Python - 1): '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Python} </span>
                <span onClick={function handelPythonAdd(){
                  return setPython(Python + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo DotNet-logo">
              <img src={dotnet} alt="DotNet-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Dot Net</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelDotRemove(){
                  return DotNet > 0 ? setDotNet(DotNet - 1):'';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {DotNet} </span>
                <span onClick={function handelDotAdd(){
                  return setDotNet(DotNet + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo golang-logo">
              <img src={golang} alt="Golang-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Golang</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelGolangRemove(){
                  return Golang > 0 ? setGolang(Golang - 1) : 0;
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Golang} </span>
                <span onClick={function handelGolangAdd(){
                  return setGolang(Golang + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo node-logo">
              <img src={node} alt="node-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Node</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelNodeRemove(){
                  return Node > 0 ? setNode(Node - 1): '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Node} </span>
                <span onClick={function handelNodeAdd(){
                  return setNode(Node + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo php-logo">
              <img src={php} alt="php-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>PHP</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelPhpRemove(){
                  return Php > 0 ? setPhp(Php - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Php} </span>
                <span onClick={function handelPhpAdd(){
                  return setPhp(Php + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teachnologies">
        <h2>Frontend Technologies</h2>
        <div className="backend-container">
          <div className="backend-box">
            <div className="logo react-logo">
              <img src={react} alt="react-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>React JS</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelReactRemove(){
                  return ReactJs > 0 ? setReactJs(ReactJs - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {ReactJs} </span>
                <span onClick={function handelReactAdd(){
                  return setReactJs(ReactJs + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo angular-logo">
              <img src={angular} alt="angular-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Angular</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelAngularRemove(){
                  return Angular > 0 ? setAngular(Angular - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Angular} </span>
                <span onClick={function handelAngularAdd(){
                  return setAngular(Angular + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo html-logo">
              <img src={html} alt="html-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>HTML</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelHtmlAdd(){
                  return Html > 0 ?  setHtml(Html - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Html} </span>
                <span onClick={function handelHtmlAdd(){
                  return setHtml(Html + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo vue-logo">
              <img src={vue} alt="Vue-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Vue Js</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelVueRemove(){
                  return Vue > 0 ?  setVue(Vue - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Vue} </span>
                <span onClick={function handelVueAdd(){
                  return setVue(Vue + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo wordpress-logo">
              <img src={wordpress} alt="wordpress-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Wordpress</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelWordpressRemove(){
                  return Wordpress > 0 ?  setWordpress(Wordpress - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Wordpress} </span>
                <span onClick={function handelWordpressAdd(){
                  return setWordpress(Wordpress + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teachnologies">
        <h2>Mobile Technologies</h2>
        <div className="backend-container">
          <div className="backend-box">
            <div className="logo android-logo">
              <img src={android} alt="android-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Android</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelAndroidRemove(){
                  return Android > 0 ? setAndroid(Android - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Android} </span>
                <span onClick={function handelAndroidAdd(){
                  return setAndroid(Android + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo ios-logo">
              <img src={ios} alt="ios-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>iOS</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelIosRemove(){
                  return Ios > 0 ?  setIos(Ios - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Ios} </span>
                <span onClick={function handelIosAdd(){
                  return setIos(Ios + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo ionic-logo">
              <img src={ionic} alt="ionic-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Ionic</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelIonicRemove(){
                  return Ionic > 0 ?  setIonic(Ionic - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Ionic} </span>
                <span onClick={function handelIonicAdd(){
                  return setIonic(Ionic + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo flutter-logo">
              <img src={flutter} alt="Flutter-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Flutter</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelFlutterRemove(){
                  return Flutter > 0 ? setFlutter(Flutter - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Flutter} </span>
                <span onClick={function handelFlutterAdd(){
                  return setFlutter(Flutter + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo react-native-logo">
              <img src={reactNative} alt="react-navtive-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>React Native</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelReactNativeRemove(){
                  return ReactNative > 0 ? setReactNavtive(ReactNative - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {ReactNative} </span>
                <span onClick={function handelReactNativeAdd(){
                  return setReactNavtive(ReactNative + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teachnologies">
        <h2>Others</h2>
        <div className="backend-container">
          <div className="backend-box">
            <div className="logo ui-logo">
              <img src={ui} alt="UI/UX-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>UI/UX</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelUiRemove(){
                  return Ui > 0 ?  setUi(Ui - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Ui} </span>
                <span onClick={function handelUiAdd(){
                  return setUi(Ui + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo database-logo">
              <img src={database} alt="database-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Database Administrator</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelDatabaseRemove(){
                  return Database > 0 ?  setDatabase(Database - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Database} </span>
                <span onClick={function handelDatabaseAdd(){
                  return setDatabase(Database + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo ba-logo">
              <img src={ba} alt="BA-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>BA</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelBaRemove(){
                  return Ba > 0 ?  setBa(Ba - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Ba} </span>
                <span onClick={function handelBaAdd(){
                  return setBa(Ba + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo qa-logo">
              <img src={qa} alt="database-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>QA Manual</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelQaRemove(){
                  return Qa > 0 ?  setQa(Qa - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Qa} </span>
                <span onClick={function handelQaAdd(){
                  return setQa(Qa + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo qa-auto-logo">
              <img src={qa} alt="database-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>QA Automation</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelQaAutoRemove(){
                  return QaAuto > 0 ?  setQaAuto(QaAuto - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {QaAuto} </span>
                <span onClick={function handelQaAutoAdd(){
                  return setQaAuto(QaAuto + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="logo dev-logo">
              <img src={dev} alt="database-logo" />
            </div>
            <div className="text-container">
              <div className="text-heading">
                <h1>Dev Ops</h1>
              </div>
              <div className="add-remove">
                <span onClick={function handelDevRemove(){
                  return Dev > 0 ?  setDev(Dev - 1) : '';
                }}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="count"> {Dev} </span>
                <span onClick={function handelQaAutoAdd(){
                  return setDev(Dev + 1);
                }}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', marginBottom:'2rem'}}>
      <a href="#nav" className='main-btn grad' onClick={openModal}>
              Get Quote
      </a>
      </div>
      <ContactFooter />
    </>
  );
}

