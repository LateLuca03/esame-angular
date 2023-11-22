import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Day } from "../model/day.interface";
import { Sun } from "../model/sun.interface";

@Injectable({
    providedIn: "root",
})
export class ApiService {

    baseUrlSun = `https://api.sunrisesunset.io/json?`;

    baseUrlDay = `https://www.7timer.info/bin/astro.php?ac=0&unit=metric&output=json&tzshift=0&`;

    constructor(private http: HttpClient) {}

    getSunByCoord(lat: string, long: string) {
        return this.http.get(this.baseUrlSun + `lat=${lat}&lng=${long}`).pipe(map((response: any) => {
            return response.results as Sun;
        }));
    }

    getDayData(long: string, lat: string) {
        return this.http.get(this.baseUrlDay + `lon=${long}$lat=${lat}`).pipe(map((response: any) => {
            /* response.dataseries.forEach((element: any) => {

                if (element.cloudcover <= 2) {
                    element.image = "../assets/img/sun.png";
                } else if (
                    element.cloudcover > 2 &&
                    element.cloudcover <= 7
                ) {
                    element.image = "../assets/img/little-cloudy.png";
                } else if (response.cloudcover > 7) {
                    element.image = "../assets/img/cloudy.png";
                }
                
            }); */

            return response.dataseries as Day[];}));
    }



}

