import chai from 'chai';
import {Api} from '../../src/apis/api';
import {ApiEvents} from '../../src/apis/api.event';
import {ApiUser} from '../../src/apis/api.user';
import {ApiTicketTransfer} from '../../src/apis/api.ticket';
import {ApiAuth} from '../../src/apis/api.auth';
import {RequestHandler} from '../../src/request/handler';
import {auth} from '../../src/auth';
import spies from 'chai-spies';

chai.use(spies);


describe('API', () => {
    it('should instantiate the class', () => {
        let api = new Api();

        chai.expect(api).to.be.an.instanceof(Api);
        chai.expect(api.login).to.be.a.isFunction;
        chai.expect(api.getEvent).to.be.a.isFunction;
        chai.expect(api.createTicketTransfer).to.be.a.isFunction;
        chai.expect(api.request).to.be.a.isFunction;
        chai.expect(api.getUser).to.be.a.isFunction;
    });

    it('should have default settings', () => {
        let api = new Api();

        chai.expect(api.settings).to.be.an('object');
        chai.expect(api.settings.url).to.equal('https://api.ingresse.com');
        chai.expect(api.settings.auth).to.equal(auth.Ingresse.type());
    });

    it('should accept custom settings', () => {
        let api = new Api({
            url: 'https://my.custom.api.url.com'
        });

        chai.expect(api.settings.url).to.equal('https://my.custom.api.url.com');
    });
});

