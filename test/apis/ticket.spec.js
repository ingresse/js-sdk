import chai from 'chai';
import {Ticket} from '../../src/apis/ticket';
import {RequestHandler} from '../../src/request/handler';
import {auth} from '../../src/auth';
import spies from 'chai-spies';

chai.use(spies);


describe('Ticket API', () => {
    it('should instantiate the class', () => {
        let ticket = new Ticket();

        chai.expect(ticket).to.be.an.instanceof(Ticket);
        chai.expect(ticket).to.be.an.instanceof(RequestHandler);
    });

    it('should have default settings', () => {
        let ticket = new Ticket();

        chai.expect(ticket.settings).to.be.an('object');
        chai.expect(ticket.settings.url).to.equal('https://ticket.ingresse.com');
        chai.expect(ticket.settings.auth).to.equal(auth.Jwt.type());
    });

    it('should accept custom settings', () => {
        let ticket = new Ticket({
            url: 'https://my.custom.ticket.url.com'
        });

        chai.expect(ticket.settings.url).to.equal('https://my.custom.ticket.url.com');
    });

    it('should have default methods', () => {
        let ticket = new Ticket();

        chai.expect(ticket.getItems).not.to.be.undefined;
        chai.expect(ticket.getItems).to.be.a('function');

        chai.expect(ticket.getItem).not.to.be.undefined;
        chai.expect(ticket.getItem).to.be.a('function');

        chai.expect(ticket.newItem).not.to.be.undefined;
        chai.expect(ticket.newItem).to.be.a('function');

        chai.expect(ticket.updateItem).not.to.be.undefined;
        chai.expect(ticket.updateItem).to.be.a('function');

        chai.expect(ticket.removeItem).not.to.be.undefined;
        chai.expect(ticket.removeItem).to.be.a('function');
    });

    describe('getTypes', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'get');
        });

        it('should getItems call this.get', () => {
            ticket.getTypes();

            chai.expect(ticket.get).to.have.been.called.with.exactly('/types', {});
        });

        it('should getItems call this.get and accept query argument', () => {
            ticket.getTypes({ limit: 10 });

            chai.expect(ticket.get).to.have.been.called.with.exactly('/types', { limit: 10 });
        });
    });

    describe('getItems', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'get');
        });

        it('should getItems call this.get', () => {
            ticket.getItems();

            chai.expect(ticket.get).to.have.been.called.with.exactly('/items', {});
        });

        it('should getItems call this.get and accept query argument', () => {
            ticket.getItems({ limit: 10 });

            chai.expect(ticket.get).to.have.been.called.with.exactly('/items', { limit: 10 });
        });
    });

    describe('getItem', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'get');
        });

        it('should getItem call this.get with id', () => {
            ticket.getItem(10);

            chai.expect(ticket.get).to.have.been.called.with.exactly('/items/10', {});
        });

        it('should getItem call this.get with id and query arguments', () => {
            ticket.getItem(10, { limit: 10 });

            chai.expect(ticket.get).to.have.been.called.with.exactly('/items/10', { limit: 10 });
        });
    });

    describe('newItem', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'post');
        });

        it('should newItem call this.post', () => {
            ticket.newItem();

            chai.expect(ticket.post).to.have.been.called.with.exactly('/items', {}, {});
        });

        it('should newItem call this.post sending data', () => {
            ticket.newItem({ name: 'Test' });

            chai.expect(ticket.post).to.have.been.called.with.exactly('/items', { name: 'Test' }, {});
        });

        it('should newItem call this.post sending data and query params', () => {
            ticket.newItem({ name: 'Test' }, { query: 'Test' });

            chai.expect(ticket.post).to.have.been.called.with.exactly('/items', { name: 'Test' }, { query: 'Test' });
        });
    });


    describe('updateItem', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'put');
        });

        it('should updateItem call this.put with id', () => {
            ticket.updateItem(10);

            chai.expect(ticket.put).to.have.been.called.with.exactly('/items/10', {}, {});
        });

        it('should updateItem call this.put with id and send data', () => {
            ticket.updateItem(10, { name: 'Test' });

            chai.expect(ticket.put).to.have.been.called.with.exactly('/items/10', { name: 'Test' }, {});
        });

        it('should updateItem call this.put with id and send data and query arguments', () => {
            ticket.updateItem(10, { name: 'Test' }, { query: 'Test' });

            chai.expect(ticket.put).to.have.been.called.with.exactly('/items/10', { name: 'Test' }, { query: 'Test' });
        });
    });

    describe('getTriggers', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'get');
        });

        it('should getTriggers call this.get with id', () => {
            ticket.getTriggers(10);

            chai.expect(ticket.get).to.have.been.called.with.exactly('/items/10/triggers', {});
        });

        it('should getTriggers call this.get with eventid param', () => {
            ticket.getTriggers(10, { eventId: 10 });

            chai.expect(ticket.get).to.have.been.called.with.exactly('/items/10/triggers', { eventId: 10 });
        });
    });

    describe('getTax', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'get');
        });

        it('should getTax call this.get', () => {
            ticket.getTax();

            chai.expect(ticket.get).to.have.been.called.with.exactly('/tax', {});
        });

        it('should getTax call this.get with eventid param', () => {
            ticket.getTax({ eventId: 10 });

            chai.expect(ticket.get).to.have.been.called.with.exactly('/tax', { eventId: 10 });
        });
    });

    describe('getPasskeys', () => {
        let ticket;

        beforeEach(() => {
            ticket = new Ticket();
            chai.spy.on(ticket, 'get');
        });

        it('should getPasskeys call this.get', () => {
            ticket.getPasskeys();

            chai.expect(ticket.get).to.have.been.called.with.exactly('/passkeys', {});
        });

        it('should getPasskeys call this.get with eventid param', () => {
            ticket.getPasskeys({ eventId: 10 });

            chai.expect(ticket.get).to.have.been.called.with.exactly('/passkeys', { eventId: 10 });
        });
    });

    describe('getPasskeyById', () => {
        let ticket;
        let id;

        beforeEach(() => {
            ticket = new Ticket();
            id     = 10;
            chai.spy.on(ticket, 'get');
        });

        it('should getPasskeyById call this.get', () => {
            ticket.getPasskeyById(id);

            chai.expect(ticket.get).to.have.been.called.with.exactly(`/passkeys/${id}`, {});
        });

        it('should getPasskeys call this.get with query param', () => {
            let query = { test: 'test' };
            ticket.getPasskeyById(id, query);

            chai.expect(ticket.get).to.have.been.called.with.exactly(`/passkeys/${id}`, query);
        });
    });

    describe('createPasskey', () => {
        let ticket;
        let data;

        beforeEach(() => {
            ticket = new Ticket();
            data = {
                eventId: 26899,
                passkey: 'testeGG',
                start: '2018-10-31 12:00:00',
                finish: '2019-11-10 20:20:00'
            }
            chai.spy.on(ticket, 'post');
        });

        it('should createPasskey call this.post', () => {
            ticket.createPasskey(data);

            chai.expect(ticket.post).to.have.been.called.with.exactly(`/passkeys/`, data, {});
        });
    });

    describe('updatePasskey', () => {
        let ticket;
        let data;
        let id;

        beforeEach(() => {
            ticket = new Ticket();
            id   = 1;
            data = {
                eventId: 26899,
                passkey: 'testeGG',
                start: '2018-10-31 12:00:00',
                finish: '2019-11-10 20:20:00'
            }
            chai.spy.on(ticket, 'put');
        });

        it('should updatePasskey call this.put', () => {
            ticket.updatePasskey(id, data);

            chai.expect(ticket.put).to.have.been.called.with.exactly(`/passkeys/${id}`, data, {});
        });
    });

    describe('associatePasskey', () => {
        let ticket;
        let data;
        let id;

        beforeEach(() => {
            ticket = new Ticket();
            id   = 1;
            data = {
                itemIds: [1,2,3]
            }
            chai.spy.on(ticket, 'put');
        });

        it('should updatePasskey call this.put', () => {
            ticket.associatePasskey(id, data);

            chai.expect(ticket.put).to.have.been.called.with.exactly(`/passkeys/${id}/items`, data, {});
        });
    });
});

