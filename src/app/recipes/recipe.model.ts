export class Recipe{
    // this is plain Typescript (no decorators)
    // you can use Vanilla typescript
    
    // Properties
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, desc:string, imagepath:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imagepath;
    }
}