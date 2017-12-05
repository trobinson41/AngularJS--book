import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Bug } from '../../shared/Bug';

@Component({
    selector: 'catalog',
    templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

    bugs: Bug[] = [];
    selectedBug: Bug;

    constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.bug.subscribe(res => this.bugs = res);
        this._data.changeBug(this.bugs);
    }

    //displayBug() {
    //    this.selectedBug = this.getBug(name);
    //    $window.location = "#viewer";
    //    $scope.currentPage = "BugViewer";
    //}

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
}
