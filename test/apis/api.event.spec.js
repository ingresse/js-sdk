import chai from 'chai';
import {ApiEvents} from '../../src/apis/api.event';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);


describe('API Events', () => {
    let event;

    beforeEach(() => {
        event = new ApiEvents();
        chai.spy.on(event, 'get');
        chai.spy.on(event, 'post');
    });

    it('should instantiate the class', () => {
        chai.expect(event).to.be.an.instanceof(ApiEvents);
        chai.expect(event).to.be.an.instanceof(RequestHandler);
    });

    describe('identifyEvent', () => {
        it('should call this.get', () => {
            let link   = 'devteamtest2018';
            let fields = 'id,title,description';

            event.identifyEvent(link, fields);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event`, { link: link, fields: fields, method: 'identify' });
        });

        it('should call this.get', () => {
            let optionalQuery = {
                link  : 'devteamtest2018udi',
                fields: 'id,title,description,poster',
                method: 'identify',
            };

            event.identifyEvent(null, null, optionalQuery);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event`, optionalQuery);
        });
    });

    describe('getEvent', () => {
        it('should call this.get', () => {
            let id = 123;
            event.getEvent(id);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event/${id}`, {});
        });
    });

    describe('getEventTickets', () => {
        it('should call this.get', () => {
            let id = 123;
            event.getEventTickets(id);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event/${id}/tickets`, {});
        });
    });

    describe('getEventSessionTickets', () => {
        it('should call this.get', () => {
            let id        = 123;
            let sessionId = 321;
            event.getEventSessionTickets(id, sessionId);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event/${id}/session/${sessionId}/tickets`, {});
        });
    });

    describe('getEventCrew', () => {
        it('should call this.get', () => {
            let id = 123;
            event.getEventCrew(id);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event/${id}/crew`, {});
        });
    });

    describe('getEventAttributes', () => {
        it('should call this.get', () => {
            let id = 123;
            event.getEventAttributes(id);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/event/${id}/attributes`, {});
        });
    });

    describe('getFeatured', () => {
        it('should call this.get', () => {
            let id = 123;
            event.getFeatured(id);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/featured/${id}`, {});
        });
    });

    describe('getEventTypes', () => {
        it('should call this.get', () => {
            event.getEventTypes();

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/home/sections`);
        });
    });

    describe('getEventCategories', () => {
        it('should call this.get', () => {
            let category = 'date/today';
            event.getEventCategories(category);

            chai.expect(event.get).to.have.been.called.with
                .exactly(`/${category}`, {});
        });
    });

    describe('requestPasskeysReport', () => {
        it('should call this.post', () => {
            let eventId = 21232;
            event.requestPasskeysReport(eventId);

            chai.expect(event.post).to.have.been.called.with
                .exactly(`/event/${eventId}/export`, {
                    type   : 'passkey',
                    format : 'csv',
                    filters: [
                        {
                            status: 'approved',
                        },
                    ],
                }, {});
        });
    });
});
