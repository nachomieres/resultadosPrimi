import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public xmlItems : any;
   
   constructor(public navCtrl: NavController, public http   : Http) 
   {

   }

   ionViewWillEnter()
   {
      this.loadXML();
   }

   loadXML()
   {
      this.http.get('https://www.loteriasyapuestas.es/es/la-primitiva/resultados/.formatoRSS')
      .map(res => res.text())
      .subscribe((data)=>
      {
        console.log (data);
         this.parse2XML(data)
         .then((data)=>
         {
            this.xmlItems = data;   
            //console.log (data);         
         });
      });
   }

   parse2XML (data) {
     return new Promise (resolve => {
        let arr = []; // array con las combinaciones
        let k; //indice del for
        let par = new DOMParser ();
        // parseo todo sacando los items
        let dato = par.parseFromString (data, "text/html").getElementsByTagName ("channel")[0].getElementsByTagName ('item');
        //let dato2 = par.parseFromString (dato.textContent, "text/xml");
        // para el item 0 saco los cuatro elementos 'b' que contienen la combinacion, complementario, reintegro y joker
        console.log (dato);
        for(k in dato) {
          
          let uno = par.parseFromString (dato[k].innerHTML, "text/html").getElementsByTagName ("b");
          console.log (uno);
          if (uno.length > 0) {
            var item = par.parseFromString(dato[k].innerHTML, "text/html").getElementsByTagName ('title')[0].innerText;
            if (item.startsWith ('La Primitiva: resultados')) {
              console.log (k + '-' + item);
              arr.push ({
                des: uno[0].innerText + ' ' + uno[1].innerText + ' ' + uno[2].innerText,
                title: item
              })
            }      
          }
        }
        resolve (arr);
     });
   }

   parseXML(data)
   {
      return new Promise(resolve =>
      {
         var k,
             arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });

         parser.parseString(data, function (err, result) 
         {
           //console.log (result);
           let chanel = result.rss.channel[0];           
           for(k in chanel.item)
            {
               var item = chanel.item[k];
               //console.log (item);
               let par = new DOMParser ();
               let dato = par.parseFromString (item.description[0], "text/html").getElementsByTagName ("b");
               //console.log (dato);
               let titulo: string = item.title[0];
               if (titulo.startsWith ("La Primitiva: resultados")) {
                arr.push({  
                    des: dato[0].textContent + ' ' + dato[1].textContent + ' ' + dato[2].textContent,
                    title: item.title[0]                  
                 });
                }
            }
           resolve(arr);
         });
      });
   }
}
