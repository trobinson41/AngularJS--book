import { Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bug-dropdown',
    templateUrl: 'bugDropdown.component.html'
})
export class BugDropdown {
    getImage(name: string): string {
        return "/bugImages/" + name + ".jpg";
    }
}