export function dateDiffInDays(date:string ):number{
   const today = new Date();
    const createdDate = new Date(date)
     const diff = today.getTime() - createdDate.getTime()

    return Math.floor(diff/ (1000 * 60 * 60 * 24));
}
export function deleteCard(card: Element | null ):void{
    // if (card) {
    //     card.remove
    // }
    card?.remove();
}

export function reset():void{
    (document.querySelector(".result") as HTMLElement).innerHTML = ""
}