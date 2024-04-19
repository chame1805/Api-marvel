export class Listseries {
    #listseries=[]

    addSeries(series){this.#listseries.push(series)}
    getSeries(){return this.#listseries}
}