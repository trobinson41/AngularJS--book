import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Bug } from './shared/Bug';

@Injectable()

export class DataService {

    bug1: Bug = new Bug(
        "Mosquito Pupa",
        "Insecta",
        "Diptera",
        "Culicidae",
        "",
        "",
        "Mosquito larva are aquatic. After the larval stage, the mosquito becomes a pupa, which is also aquatic, but does not feed. The oddly shaped \"horns\" on the pupa pictured here are the respiratory trumpets, which the pupa uses to breathe air at the surface of the water. Eventually, the back of the pupa will split open and the adult mosquito will emerge.",
        "mosquito pupa"
    );

    bug2: Bug = new Bug(
        "Amphipod",
        "Malacostraca",
        "Amphipoda",
        "Hyalellidae",
        "Hyalella",
        "",
        "Amphipods are crustaceans. Most species live in a marine environment, but the one pictured here is a freshwater species. It was extremely abundant in the stream where I found it, but most individuals are very tiny -- barely visible, in fact -- so they usually go unnoticed. This was one of the larger ones, maybe a quarter of an inch long. It probably eats decaying vegetation.",
        "Amphipoda - Hyalella"
    );

    bug3: Bug = new Bug(
        "Green Lynx Spider",
        "Arachnida",
        "Araneae",
        "Oxyopidae",
        "Peucetia",
        "viridans",
        "Members of the Oxyopidae family are called lynx spiders. The one pictured here is probably a brown morph of a green lynx spider (Peucetia viridans). A morph is a member of a distinct population within a species. Populations can differ visually and/or behaviorally and still qualify as belonging to the same species. The lynx spider, like many spiders, lays its eggs in an egg sac. These baby spiders (or spiderlings) have just recently hatched and emerged from the sac.",
        "linx spider with babies"
    );

    bug4: Bug = new Bug(
        "Inflated Beetle",
        "Insecta",
        "Coleoptera",
        "Meloidae",
        "Cysteodemus",
        "armatus",
        "Beetles and some other types of insects use only the hind wings for flight. The forewings have been modified to form hardened covers called elytra (singular elytron) that protect the hind wings when they're not being used. The inflated beetle is so named because of its inflated elytra. Inflated beetles live in the Colorado and Mojave Deserts and feed mostly on creosote bushes.",
        "Inflated Beetle (Cysteodemus armatus)"
    );

    private bugs = new BehaviorSubject<Bug[]>([this.bug1, this.bug2, this.bug3, this.bug4]);

    bug = this.bugs.asObservable();

    changeBug(bug: any) {
        this.bugs.next(bug);
    }

}
