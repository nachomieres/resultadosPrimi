import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class ParserPrimiProvider {

  constructor(public http: Http) {    
  }

  loadXML(sorteo: string)
   {
    return this.http.get(`https://www.loteriasyapuestas.es/es/${sorteo}/resultados/.formatoRSS`)
      .map(res => {
        let array = []; // donde se guarda la respuesta
        let i; // indice del for
        let parser = new DOMParser ();
        let items = parser.parseFromString (res.text(), "text/xml")
          .getElementsByTagName ("channel")[0]
          .getElementsByTagName ("item");
        for (i in items) {          
          //let titulo = parser.parseFromString (items[i].innerHTML , "text/html").getElementsByTagName ('title')[0].textContent;            
          let combi =  parser.parseFromString (items[i].innerHTML , "text/html").getElementsByTagName ('b');
          // filtro los resultados de mas
          if (combi.length >0) {
            let titulo = parser.parseFromString (items[i].innerHTML , "text/html").getElementsByTagName ('title')[0].textContent;    
            let fecha = new Date (parser.parseFromString (items[i].innerHTML , "text/html").getElementsByTagName ('pubDate')[0].textContent);        
            let imagen = parser.parseFromString (items[i].innerHTML , "text/html").getElementsByTagName ('title')[0].textContent;    
            // me quedo con la linea de resultados
            if (sorteo ==='la-primitiva'){
              if (titulo.startsWith ('La Primitiva: resultados')) {
                array.push ({
                  des: combi[0].textContent + ' ' + combi[1].textContent + ' ' + combi[2].textContent,
                  titulo: titulo,
                  fecha: fecha.toLocaleDateString ()
                })
              }
            }
            if (sorteo ==='bonoloto'){
              if (titulo.startsWith ('BonoLoto: resultados')) {
                array.push ({
                  des: combi[0].textContent + ' ' + combi[1].textContent + ' ' + combi[2].textContent,
                  titulo: titulo,
                  fecha: fecha.toLocaleDateString ()
                })
              }
            }                    
          }
        }
        return array;
      })        
   }
}
