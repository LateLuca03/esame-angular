import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CoordinateFormatter } from "../model/coordinate.inteface";
import { ApiService } from "../services/api.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    coordinate: CoordinateFormatter = {
        latitudine: "",
        longitudine: "",
    }

    lista: any[] = [];
    listaDay: any[] = [];
    
    latitudine: string = ""
    longitudine: string = ""

    cerca(latitudine: string, longitudine: string){

        this.coordinate.latitudine = latitudine;
        this.coordinate.longitudine = longitudine;

    }

    constructor(
        private router: Router,
        private apiService: ApiService
    ){}

    

    ngOnInit(): void {

        //chiamata per torino
        this.apiService
            .getSunByCoord("45", "7")
                .subscribe((response) => {
                    this.lista.push(response)
                })
        this.apiService
            .getDayData("45", "7")
                .subscribe((response) => {
                    this.listaDay = response;
                })
        //chiamata LA
        this.apiService
            .getSunByCoord("34", "-118")
                .subscribe((response) => {
                    this.lista.push(response)
                })
        this.apiService
            .getDayData("34", "-118").subscribe((response) => {
                this.listaDay = response;
            });
        //chiamata tokyo
        this.apiService
            .getSunByCoord("35", "139")
                .subscribe((response) => {
                    this.lista.push(response)
                })
        this.apiService
            .getDayData("35", "139")
            .subscribe((response) => {
                this.listaDay = response;
            });
    }
}
