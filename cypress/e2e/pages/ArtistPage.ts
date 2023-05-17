const artist_name_text='#artist-name'

export class ArtistPage{
    
    verifyArtistNameOnPage(artist_name: string){
        cy.get(artist_name_text).invoke('text').then((text) => {
            text.includes(artist_name)
        })
    }
}