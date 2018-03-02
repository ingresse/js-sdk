import chai from 'chai';
import {ApiUser} from '../../src/apis/api.user';
import {RequestHandler} from '../../src/request/handler';
import {Cookie} from '../../src/helper/cookie';
import spies from 'chai-spies';

chai.use(spies);


describe('API User', () => {
    let user;

    beforeEach(() => {
        user = new ApiUser();
        global.document = {
            cookie: {
                userId: 123,
                token: 'abc',
                jwt: 'def'
            },
            location: {
                hostname: 'dev.ingresse.com',
            },
        };
        chai.spy.on(user, 'get');
        chai.spy.on(user, 'post');
        chai.spy.on(user.cookie, 'createCookie');
        chai.spy.on(user.cookie, 'deleteCookie');
    });

    afterEach(() => {
        delete global.document;
    });

    it('should instantiate the class', () => {
        chai.expect(user).to.be.an.instanceof(ApiUser);
        chai.expect(user).to.be.an.instanceof(RequestHandler);
        chai.expect(user.cookie).to.be.an.instanceof(Cookie);
    });

    describe('getUser', () => {
        it('should call this.get', () => {
            let id = 123;
            user.getUser(id);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}`, {});
        });
    });

    describe('getUserPicture', () => {
        it('should call this.get', () => {
            let id = 123;
            user.getUserPicture(id);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}/picture`, {});
        });
    });

    describe('getUserTickets', () => {
        it('should call this.get', () => {
            let id = 123;
            user.getUserTickets(id);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}/tickets`, {});
        });
    });

    describe('createUser', () => {
        it('should call this.get', () => {
            let data = {
                name: 'test',
                email: 'test@test.com'
            };

            user.createUser(data);

            chai.expect(user.post).to.have.been.called.with
                .exactly(`/user/`, data, {method: 'create'});
        });
    });

    describe('getUserNewTickets', () => {
        it('should call this.get', () => {
            let id = 123;
            user.getUserNewTickets(id);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}/transfers`, {});
        });
    });

    describe('getAllUserSessions', () => {
        it('should call this.get', () => {
            let id = 123;
            user.getAllUserSessions(id);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}/sessions`, {});
        });
    });

    describe('getUserSessionTickets', () => {
        it('should call this.get', () => {
            let id = 123;
            let session = 456;

            user.getUserSessionTickets(id, session);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}/sessions/${session}/tickets`, {});
        });
    });

    describe('getUserForTransfer', () => {
        it('should call this.get', () => {
            let term = 'test';
            user.getUserForTransfer(term);

            chai.expect(user.get).to.have.been.called.with
                .exactly('/search/transfer/user', {term: term});
        });
    });

    describe('getRecentTransfers', () => {
        it('should call this.get', () => {
            let id = 123;
            user.getRecentTransfers(id);

            chai.expect(user.get).to.have.been.called.with
                .exactly(`/user/${id}/last-transfers`, {});
        });
    });

    describe('saveCredentials', () => {
        it('should call set credentials and call user.cookie.createCookie', () => {
            let id = 123;
            let token = 'abc123';
            let jwt = 'cba321';

            user.saveCredentials(id, token, jwt);

            chai.expect(user.credentials.userId).to.be.equal(id);
            chai.expect(user.credentials.token).to.be.equal(token);
            chai.expect(user.credentials.jwt).to.be.equal(jwt);

            chai.expect(user.cookie.createCookie).to.have.been.called.with
                .exactly('userId', id, 5);
            chai.expect(user.cookie.createCookie).to.have.been.called.with
                .exactly('token', token, 5);
            chai.expect(user.cookie.createCookie).to.have.been.called.with
                .exactly('jwt', jwt, 5);
        });

        it('should call set credentials and call user.cookie.createCookie', () => {
            global.document.location.hostname = 'whitelabel.com';

            let id = 123;
            let token = 'abc123';
            let jwt = 'cba321';

            user.saveCredentials(id, token, jwt);

            chai.expect(user.credentials.userId).to.be.equal(id);
            chai.expect(user.credentials.token).to.be.equal(token);
            chai.expect(user.credentials.jwt).to.be.equal(jwt);

            chai.expect(user.cookie.createCookie).to.have.been.called.with
                .exactly('userId', id, 5);
            chai.expect(user.cookie.createCookie).to.have.been.called.with
                .exactly('token', token, 5);
            chai.expect(user.cookie.createCookie).to.have.been.called.with
                .exactly('jwt', jwt, 5);
        });
    });

    describe('getCredentials', () => {
        beforeEach(() => {
            chai.spy.on(user.cookie, 'getCookie');
        });

        it('should returns the credentials without call user.cookie.getCookie', () => {
            user.credentials = {
                userId: 123,
                token: 'abc123',
                jwt: 'def456'
            };

            let credentials = user.getCredentials();

            chai.expect(user.credentials).to.be.equal(credentials);
            chai.expect(user.cookie.getCookie).to.not.be.called();
        });

        it('should call user.cookie.getCookie 3 times', () => {
            let credentials = user.getCredentials();

            chai.expect(user.cookie.getCookie).to.have.been.called.exactly(3);
            chai.expect(credentials).to.be.false;
        });
    });

    describe('clearCredentials', () => {
        it('should call user.cookie.deleteCookie 3 times', () => {
            user.clearCredentials();

            chai.expect(user.cookie.deleteCookie).to.have.been.called.exactly(3);
        });
    });
});

