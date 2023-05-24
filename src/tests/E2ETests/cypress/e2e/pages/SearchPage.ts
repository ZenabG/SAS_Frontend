const search_result_for_text='#search-result-for'
const album_grid_item='#album-item'

export class SearchPage{

    verifySearchResultsWorksCorrectly(artist_name: string){
        cy.get(search_result_for_text).invoke('text').then((text) => {
            text.includes(artist_name)
        })
    }

    getArtistFromSearchResults(artist_name: string){
        cy.get(album_grid_item).each(($element, index, $list) => {
            if($element.text().includes(artist_name)) {
                cy.wrap($element).click()
            } else {
                cy.wrap(null).then(() => {
                  throw new Error(`Album with the artist name ${artist_name} not found`);
                });
            }
        })
    }
}