import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { Bug } from '../../shared/Bug';

import { Http } from '@angular/http';

@Component({
    selector: 'viewer',
    templateUrl: './viewer.component.html'
})
export class ViewerComponent implements OnInit {

    bugs: Bug[] = [];
    selectedBug: Bug;

    constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.bug.subscribe(res => this.bugs = res);
        this.selectedBug = this.bugs[0];
        this._data.changeBug(this.bugs);
    }

    getFilename(name: string): string {
        return "../../bugImages/" + name + ".jpg";
    }

    getBug(name: string): Bug {
        for (let i of this.bugs) {
            if (name == i.CommonName)
                return i;
        }
        return new Bug("", "", "", "", "", "", "", "");
    };

    setSelectedBug(name: string) {
        this.selectedBug = this.getBug(name);
        if (this.selectedBug.CommonName == "")
            delete this.selectedBug;
    }
}
//export class FetchDataComponent {
//    public forecasts: WeatherForecast[];

//    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
//        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
//            this.forecasts = result.json() as WeatherForecast[];
//        }, error => console.error(error));
//    }
//}

//interface WeatherForecast {
//    dateFormatted: string;
//    temperatureC: number;
//    temperatureF: number;
//    summary: string;
//}
