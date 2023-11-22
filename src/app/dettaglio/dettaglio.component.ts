import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Sun } from "../model/sun.interface";
import { CoordinateFormatter } from "../model/coordinate.inteface";
import { Day } from "../model/day.interface";

@Component({
    selector: "app-detail",
    templateUrl: "./dettaglio.component.html",
})
export class DettaglioComponent implements OnInit {
    
    coords: CoordinateFormatter = {
        latitudine: "",
        longitudine: "",
    };

    lista!: Sun 

    listaMeteo: Day[] = []

    constructor(
        private coordinate: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {

        this.route.params.subscribe((coordinate) => {

            this.coords.latitudine = coordinate["latitudine"];
            this.coords.longitudine = coordinate["longitudine"];

            this.coordinate
                .getSunByCoord(this.coords.latitudine, this.coords.longitudine)
                .subscribe((response) => {
                    this.lista = response;
                });

            this.coordinate
                .getDayData(this.coords.latitudine, this.coords.longitudine)
                .subscribe((response) => {
                    this.listaMeteo = response;
                });
        });        
    }
}
