

const buttons = [
    `<button  id="col1"class="col" onclick="c()">C</button><button id="col3" class="btn col">(</button>
      <button id="col4" class="btn col">)</button>
      <button id="col5" class="btn col">*</button>`,
  
    `<button id="col2" class="col" onclick="sqrt()">X<sup>2</sup></button>
      <button id="col6" class="btn col" >%</button>
      <button id="col7"  class="btn col">π</button>
      <button id="col8" class="btn col">/</button>`,
  
    `<button class="btn col">7</button>
      <button class="btn col">8</button>
      <button class="btn col">9</button>
      <button id="col9" class="btn col">-</button>`,
  
    ` <button class="btn col">4</button>
      <button class="btn col">5</button>
      <button class="btn col">6</button>
      <button id="col9" class="btn col">+</button>`,
  
    ` <button class="btn col">1</button>
      <button class="btn col">2</button>
      <button class="btn col">3</button>
      <button id="ac" class="col" onclick="ac()">AC</span></button>`,
  
    ` <button class="btn col">.</button>
      <button class="btn col">0</button>
      <button class="btn col">00</button>
      <button id="submit"class="col" onclick="display.value=eval(display.value)">=</button>`,
  ];
  
  
  //container div
  const container = document.createElement("div");
  container.classList.add("container");
  
  //screen div
  const screen = document.createElement("div");
  screen.classList.add("screen","row");
  screen.innerHTML = `<input id="display" class="w-100 p3" type="text" placeholder="0">`;
  screen.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
      document.getElementById("submit").click();
    }
  })
  
  //buttons div
  const btnDiv = document.createElement('div');
  btnDiv.classList.add("Table")
  
  
  //creating rows for buttons
  for(let btn of buttons){
    const row =document.createElement('div');
    row.classList.add("row");
    row.innerHTML = btn ;
    btnDiv.append(row);
  }
  
  document.body.append(container);
  
  container.append(screen);
  container.append(btnDiv);
  
  
  //functions for calculations
  var display= document.querySelector('#display');
  var btn = document.querySelectorAll('.btn');
  
  for(item of btn){
      item.addEventListener('click',(e)=>{
          btntext = e.target.innerText;
          if(btntext==='π'){
              btntext=3.14;
          }
          
          display.value+=btntext;
      });
  }
  
  function c(){
      display.value=display.value.substr(0,display .value.length-1);
  }
  
  function ac(){
      display.value="";
  }
  
  function sqrt(){
      display.value=Math.pow(display.value,2);
  }