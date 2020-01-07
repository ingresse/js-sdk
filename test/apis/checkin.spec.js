
import chai from 'chai';
import {Checkin} from '../../src/apis/checkin';
import {RequestHandler} from '../../src/request/handler';
import {auth} from '../../src/auth';
import spies from 'chai-spies';

chai.use(spies);


describe('Checkin API', () => {
    it('should instantiate the class', () => {
        let checkin = new Checkin();

        chai.expect(checkin).to.be.an.instanceof(Checkin);
        chai.expect(checkin).to.be.an.instanceof(RequestHandler);
    });

    it('should have default settings', () => {
        let checkin = new Checkin();

        chai.expect(checkin.settings).to.be.an('object');
        chai.expect(checkin.settings.url).to.equal('https://checkin.ingresse.com');
        chai.expect(checkin.settings.auth).to.equal(auth.Jwt.type());
    });

    it('should accept custom settings', () => {
        let checkin = new Checkin({
            url: 'https://my.custom.checkin.url.com'
        });

        chai.expect(checkin.settings.url).to.equal('https://my.custom.checkin.url.com');
    });

    it('should accept custom enviroment', () => {
        let checkin = new Checkin({
            env : 'hmlb',
            host: 'test',
        });

        chai.expect(checkin.settings.url).to.equal('https://hmlb-checkin.ingresse.com');
    });

    it('should accept custom enviroment, as \'host\' param', () => {
        let checkin = new Checkin({
            host: 'integration',
        });

        chai.expect(checkin.settings.url).to.equal('https://integration-checkin.ingresse.com');
    });

    it('should accept custom enviroment, as full URL', () => {
        let checkin = new Checkin({
            env : 'https://my.custom.checkin.url.com',
            host: 'testc',
        });

        chai.expect(checkin.settings.url).to.equal('https://my.custom.checkin.url.com');
    });

    it('should have default methods', () => {
        let checkin = new Checkin();

        chai.expect(checkin.getReport).not.to.be.undefined;
        chai.expect(checkin.getReport).to.be.a('function');
    });

    describe('getReport', () => {
        let checkin;
        let eventId   = 21232;
        let sessionId = 1;

        beforeEach(() => {
            checkin = new Checkin();
            chai.spy.on(checkin, 'get');
        });

        it('should getReport call this.get', () => {
            checkin.getReport(eventId, sessionId);

            chai.expect(checkin.get).to.have.been.called.with.exactly(`/report/${eventId}/entrance`, {
                session_id: sessionId,
            });
        });

        it('should getReport call this.get and accept query argument', () => {
            checkin.getReport(eventId, sessionId, {limit: 10});

            chai.expect(checkin.get).to.have.been.called.with.exactly(`/report/${eventId}/entrance`, {
                session_id: sessionId,
                limit: 10
            });
        });
    });
});
