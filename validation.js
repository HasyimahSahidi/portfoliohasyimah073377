/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function validation(){
                    let name= document.forms["sendmessage"]["name"].value;
                    if(name === ""){
                      alert("Name must be filled out");
                      document.forms["sendmessage"]["name"].select();
                      document.forms["sendmessage"]["name"].focus();
                      return false;
                    }
                    let email= document.forms["sendmessage"]["email"].value;
                    if(email === ""){
                      alert("Email must be filled out");
                      document.forms["sendmessage"]["email"].select();
                      document.forms["sendmessage"]["email"].focus();
                      return false;
                    }
                    let message= document.forms["sendmessage"]["message"].value;
                    if(message === ""){
                      alert("Message must be filled out");
                      document.forms["sendmessage"]["message"].select();
                      document.forms["sendmessage"]["message"].focus();
                      return false;
                    }
                    return true;
                }
