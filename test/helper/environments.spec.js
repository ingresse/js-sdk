/* Core Packages */
import chai from 'chai';
import spies from 'chai-spies';

/* Tested Modules */
import { environments } from '../../src/helper/environments';

/* Test Settings */
chai.use(spies);

/* Tests itself */
describe('Environments Helper', () => {

    describe('getURL', () => {
        it('should returns Ingresse\'s API default URL', () => {
            chai.expect(environments.getURL()).to.equal('https://api.ingresse.com');
        });

        it('should returns Ingresse\'s Event Microservice URL', () => {
            chai.expect(environments.getURL('event')).to.equal('https://event.ingresse.com');
        });

        it('should returns Ingresse\'s Event Search Microservice URL', () => {
            chai.expect(environments.getURL('event-search')).to.equal('https://event-search.ingresse.com');
        });

        it('should returns Ingresse\'s Ticket Microservice URL', () => {
            chai.expect(environments.getURL('ticket')).to.equal('https://ticket.ingresse.com');
        });

        it('should returns a full custom environment URL', () => {
            chai.expect(environments.getURL(null, 'https://my-custom-env.test.net')).to.equal('https://my-custom-env.test.net');
        });
    });

});
