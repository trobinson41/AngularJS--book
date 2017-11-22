import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Bug } from '../../shared/Bug';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    bugs: Bug[];

    constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.bug.subscribe(res => this.bugs = res);
        //this.itemCount = this.goals.length;
        this._data.changeBug(this.bugs);
    }

    getImage(name: string): string {
        return "/bugImages/" + name + ".jpg";
    }

    selectedBug = this.bugs[0];

    getBug(name: string): Bug {
        for (let i in this.bugs) {
            if (name == this.bugs[i].CommonName)
                return this.bugs[i];
        }
    };

    onChange(name: string) {
        //alert(bug.CommonName);
        this.selectedBug = this.getBug(name);
    }
}
