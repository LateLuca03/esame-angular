import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CoordinateFormatter } from "../model/coordinate.inteface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    coordinate: CoordinateFormatter = {
        latitudine: "",
        longitudine: "",
    }
    
    latitudine: string = ""
    longitudine: string = ""

    cerca(latitudine: string, longitudine: string){

        this.coordinate.latitudine = latitudine;
        this.coordinate.longitudine = longitudine;

    }

    constructor(
        private router: Router
    ){}

    

    ngOnInit(): void {

        
        
    }
}
