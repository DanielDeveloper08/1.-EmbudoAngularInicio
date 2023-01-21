import { Component, OnInit } from '@angular/core';
import { Data, paramsToSend, ResponseCurrentUserI, ResponseSecciones } from './interfaces/usuario.interface';
import { GraficosService } from './services/graficos.service';
import { isEmpty } from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	constructor(private graficosService: GraficosService){}

	currentUser : ResponseCurrentUserI={} as ResponseCurrentUserI;
	dataResponse !: Data;
	chartOptions: any = {};
	ngOnInit(): void {
			if(localStorage.getItem("Usuario") !=null){
				this.currentUser = JSON.parse(localStorage.getItem("Usuario")!);
				if(!isEmpty(this.currentUser)){
					this.getData();
				}
			}
	}

	getData(){
			let params: paramsToSend = {
				fechaInicio:"2019-01-20",
				fechaFinal:"2023-04-20",
				idUsuario: this.currentUser.users[0].id	
			}
			
			this.graficosService.getGraficosData(params).subscribe(
				(data)=>{
					this.dataResponse = data.data as unknown as Data;
					console.log("data ",this.dataResponse)

					this.chartOptions = {
						animationEnabled: true,
						
						data: [{
							type: "funnel",
							indexLabel: "{name}: {y}",
							valueRepresents: "area",
							dataPoints:
							this.dataResponse.cabecera.keys.map( key=>{
								return {y: this.dataResponse.cabecera.values[key],name: key}
							})
							//  [
							// { y: 232323, name: "Correo electrónico recibido" },
							// { y: 2000, name: "Correo electrónico abierto" },
							// { y: 1500, name: "Sitio web visitado" },
							// { y: 500, name: "Producto agregado al carrito" },
							// { y: 250, name: "Compra completada" }
							// ]
						}]
						}
				}
			);
	}

	
		
		
	
	
}
