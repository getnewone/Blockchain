// public/app.js                                                                                                                             
document.addEventListener('DOMContentLoaded', () => {                                                                                        
    fetch('/generate-address')                                                                                                                 
      .then(response => response.json())                                                                                                       
      .then(data => {                                                                                                                          
        document.getElementById('address').innerText = data.address;                                                                           
      });                                                                                                                                      
  });      