/// <reference types="cypress"/>
import { HomePage } from "./pages/HomePage"
import { SearchPage } from "./pages/SearchPage"
import { ArtistPage } from "./pages/ArtistPage"
import { AlbumPage } from "./pages/AlbumPage"

const artist_name = 'Taylor Swift'
const homePage = new HomePage
const searchPage = new SearchPage
const artistPage = new ArtistPage
const albumPage = new AlbumPage

describe('All critical paths', () => {

    beforeEach(() => {
        const port = process.env.PORT || 3000; // Default to port 3000 if process.env.PORT is not defined
        cy.visit(`http://localhost:${port}/`)
    })

    /**
    * The New Releases content is displayed on the Home page.
    */
    it('New Releases section is present', () => {
        homePage.verifyNewReleasesIsPresent()
    })

    /**
    * Use the search feature in the top right to search for an artist.
    */
    it('Search feature', () => {
        homePage.enterTextInSearchBox(artist_name)
        searchPage.verifySearchResultsWorksCorrectly(artist_name)
    })

    /**
     * Find your artist and follow through to one of their albums.
     */
    it('Find artist and follow to their album', () => {
        homePage.enterTextInSearchBox(artist_name)
        searchPage.getArtistFromSearchResults(artist_name)
        artistPage.verifyArtistNameOnPage(artist_name)
    })

    /**
     * Confirm that album details and songs are displayed within the album.
     */
    it('Confirm that album details and songs are displayed within the album', () => {
        homePage.enterTextInSearchBox(artist_name)
        searchPage.getArtistFromSearchResults(artist_name)
        artistPage.verifyArtistNameOnPage(artist_name)
        albumPage.getFirstAlbum()
        albumPage.verifyAlbumDetailsAreVisible()
        albumPage.verifyTracksAreAvailableInAlbum()
    })

})


