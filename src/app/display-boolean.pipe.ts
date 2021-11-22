import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: 'bool'
})

export class DisplayBooleanPipe implements PipeTransform{
    transform(aBoolean: boolean, lang: string = "en"): string {
        if (lang ==="en"){
            return aBoolean ? "YES" : "NO";}
        else if(lang==="fr"){
                return aBoolean ? "OUI" : "NON"
            }
        else { return aBoolean ? "YES":"NO"}

        }
    }