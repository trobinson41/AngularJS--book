import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Bug } from '../../shared/Bug';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

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
        return new Bug("","","","","","","","");
    };

    setSelectedBug(name: string) {
        this.selectedBug = this.getBug(name);
    }
}
