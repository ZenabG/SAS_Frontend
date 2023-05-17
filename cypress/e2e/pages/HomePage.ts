    const new_releases_section_text='#new-releases'
    const search_textbox='#search'

export class HomePage{

    verifyNewReleasesIsPresent(){
        cy.get(new_releases_section_text).scrollIntoView()
        cy.get(new_releases_section_text).should('be.visible');
    }

    enterTextInSearchBox(artist_name: string){
        cy.get(search_textbox).type(`${artist_name}{enter}`)
    }

}