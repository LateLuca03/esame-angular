import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CoordinateFormatter } from "../model/coordinate.inteface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    coordinate: CoordinateFormatter = {
        latitudine: 0,
        longitudine: 0,
    }
    
    latitudine: number = 0
    longitudine: number = 0

    cerca(latitudine: number, longitudine: number){

        this.coordinate.latitudine = latitudine;
        this.coordinate.longitudine = longitudine;

        this.router.navigate(["/dettaglio", this.coordinate])

    }

    constructor(
        private router: Router
    ){}

    

    ngOnInit(): void {

        
        
    }
}
