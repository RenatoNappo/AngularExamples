import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform{
    
    constructor(){}

    transform(input:string):any{
        if (!input)
            return null;
        
        let words = input.split(' ');
        for(var i = 0; i < words.length; i++)
        {
            let word:string = words[i];
            if(i > 0 && this.IsPreposition(word))
                words[i].toLowerCase();
            else
               words[i] = this.CapitaliseWord(word);
        }
        return words.join(' ');
    }

    private IsPreposition(word:string):boolean{
        let prepositions:string[] = ['of','the', 'a', 'an'];
        return prepositions.includes(word.toLowerCase());
    }

    private CapitaliseWord(word:string):string{
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }
}


      //else {
        //    input = input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));