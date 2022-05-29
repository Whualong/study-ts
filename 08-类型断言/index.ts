interface Cat {
    name: string;
    run():void;
}
interface Fish{
    name : string;
    swim() : void;
}
function isFish(animal : Fish | Cat){
    if(typeof (animal as Fish).swim === 'function'){
        return true;
    }
    return false;
}