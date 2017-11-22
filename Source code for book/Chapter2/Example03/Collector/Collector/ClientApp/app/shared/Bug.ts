export class Bug {
    CommonName: string
    Class: string
    Order: string
    Family: string
    Genus: string
    Species: string
    Description: string
    Filename: string

    constructor(commonName, className, order, family, genus, species, description, filename) {
        this.CommonName = commonName;
        this.Class = className;
        this.Order = order;
        this.Family = family;
        this.Genus = genus;
        this.Species = species;
        this.Description = description;
        this.Filename = filename;
    }
}