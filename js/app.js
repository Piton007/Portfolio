
import "../scss/main.scss"
import "../file/cv.pdf"
import "../file/original.jpg"
import "./materialize.min.js"
import "../file/eventSoft.png"
import "../file/kinesya.png"
import "../file/background.jpg"
import "../file/logo.jpg"

document.addEventListener('DOMContentLoaded', function() {

    let email = ""
    let subject = ""
    let message = ""
    const emailNode = document.getElementById("email_address")
    const subjectNode = document.getElementById("email_subject")
    const messageNode = document.getElementById("email_message")
    const sendBtnNode = document.getElementById("send")

    function sendEmail() {
      if (emailNode.classList.contains("invalid") && subjectNode.classList.contains("invalid") && messageNode.classList.contains("invalid") || !validateFieldsValue() )
        M.toast({html: 'Complete los campos',classes:"wrong-toast"})
      else{
        Email.send({
          SecureToken : "cd6ff455-9bf1-4109-90f0-7e24530a9a64",
          To : 'JoseMoWa@gmail.com',
          From : email,
          Subject : subject,
          Body : message
        }).then(
        ()=>{
          M.toast({html: 'Enviado Satisfactoriamente',classes:"good-toast"})
        }
      ).catch(()=>{
        M.toast({html: 'No se puedo enviar su mensaje',classes:"wrong-toast"})
      }); 
      }
      
     }


    function setFieldValues(id,value){
      switch (id) {
        case "email_address":
            email = value
          break;
        case "email_subject":
            subject = value         
          break;
        case "email_message":
            message = value
          break;
      
        default: console.log("error")
          break;
      }
    }

    function validateFieldsValue(){
      return email.length > 0 && message.length > 0 && subject.length > 0
    }

    const form  = document.forms[0];
    sendBtnNode.addEventListener("click",()=>{sendEmail()})
    form.addEventListener("input",(event)=>{
        setFieldValues(event.target.id,event.target.value)
    })
    

    var _scrolls = document.querySelectorAll('.scrollspy');
    var scrollInstances = M.ScrollSpy.init(_scrolls,{scrollOffset:100});
    var elems = document.querySelectorAll('.sidenav');
    var sideNav = M.Sidenav.init(elems);

    var sideNavInstance = M.Sidenav.getInstance(sideNav[0].el)

   
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
    
    var observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          
          if ( entry.target.id > 1 && Math.floor(entry.intersectionRatio * 100) > 10){
            entry.target.classList.remove("invisible")
            entry.target.classList.add("animated")
            entry.target.classList.add("fadeInLeft")
          }
        
      })
    }, options);
    
    _scrolls.forEach((scroll)=>{
      observer.observe(scroll)
    })
    

  });