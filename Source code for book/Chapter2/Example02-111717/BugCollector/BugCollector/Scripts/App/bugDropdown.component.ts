import { Component} from '@angular/core';
import bugList = require('./bugList');

@Component({
    moduleId: module.id,
    selector: 'bug-dropdown',
    templateUrl: 'bugDropdown.component.html'
})
export class BugDropdown {
    getImage(name: string): string {
        return "/bugImages/" + name + ".jpg";
    }

    selectedBug = bugList.bugs[0];
    
    getBug(name:string) {
        for (let i in bugList) {
            if (name == bugList[i].CommonName)
                return bugList[i];
        }
    };

    onChange(bug) {
        alert(bug.CommonName);
        //this.selectedBug = this.getBug(name);
    }
}