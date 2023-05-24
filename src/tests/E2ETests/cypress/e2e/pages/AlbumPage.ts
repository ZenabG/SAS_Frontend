
const album_grid_item='#album-item'
const album_details_text = '#album-details'
const album_track_details_text = '#track-details'

export class AlbumPage{

    getFirstAlbum(){
        cy.get(album_grid_item).each(($element, index, $list) => {
            cy.wrap($element).click()
        })
    }

    verifyAlbumDetailsAreVisible(){
        cy.get(album_details_text).should('be.visible')
    }

    verifyTracksAreAvailableInAlbum(){
        cy.get(album_track_details_text).each(($element, index, $list) => {
            if($element) {
                cy.wrap($element).invoke('text').then((text) => {
                    text.length !=0
                })
            } else {
                cy.wrap(null).then(() => {
                  throw new Error(`Album track list is empty`);
                });
            }
        })
    }
}