/* Core Packages */
import chai from 'chai';
import spies from 'chai-spies';

/* Tested Modules */
import { EventSearch } from '../../src/apis/search.event';
import { RequestHandler } from '../../src/request/handler';

/* Test Settings */
chai.use(spies);

/* Tests itself */
describe('EventSearch API', () => {
    it('should instantiate the class', () => {
        let eventSearch = new EventSearch();

        chai.expect(eventSearch).to.be.an.instanceof(EventSearch);
        chai.expect(eventSearch).to.be.an.instanceof(RequestHandler);
    });

    it('should have default settings', () => {
        let eventSearch = new EventSearch();

        chai.expect(eventSearch.settings).to.be.an('object');
        chai.expect(eventSearch.settings.url).to.equal('https://event-search.ingresse.com');
    });

    it('should accept custom settings', () => {
        let eventSearch = new EventSearch({
            url: 'https://my.custom.eventSearch.url.com'
        });

        chai.expect(eventSearch.settings.url).to.equal('https://my.custom.eventSearch.url.com');
    });

    it('should have default methods', () => {
        let eventSearch = new EventSearch();

        chai.expect(eventSearch.search).not.to.be.undefined;
        chai.expect(eventSearch.search).to.be.a('function');

        chai.expect(eventSearch.searchByTerm).not.to.be.undefined;
        chai.expect(eventSearch.searchByTerm).to.be.a('function');
    });

    describe('search', () => {
        let eventSearch;
        let defaultQuery = {
            size: 20,
        };

        beforeEach(() => {
            eventSearch = new EventSearch();
            chai.spy.on(eventSearch, 'get');
        });

        it('should "search" call this.get', () => {
            eventSearch.search();

            chai.expect(eventSearch.get).to.have.been.called.with.exactly('/1', defaultQuery);
        });

        it('should "search" call this.get and accept query argument', () => {
            let query = {
                from: 'now-6h',
                size: 32,
            };

            eventSearch.search(query);

            chai.expect(eventSearch.get).to.have.been.called.with.exactly('/1', Object.assign({},
                defaultQuery,
                query
            ));
        });
    });
});
