import chai from 'chai';
import {ApiAuth} from '../../src/apis/api.auth';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);


describe('API Auth', () => {
    let auth;
    let query = {
        test: 'devteam',
    };

    beforeEach(() => {
        auth = new ApiAuth();
        chai.spy.on(auth, 'get');
        chai.spy.on(auth, 'post');
    });

    it('should instantiate the class', () => {
        chai.expect(auth).to.be.an.instanceof(ApiAuth);
        chai.expect(auth).to.be.an.instanceof(RequestHandler);
    });

    describe('login', () => {
        it('should call this.post', () => {
            let data = {
                name: 'test',
                pass: '123'
            };
            auth.login(data);

            chai.expect(auth.post).to.have.been.called.with
                .exactly('/login', data, {});
        });
    });

    describe('login company', () => {
        it('should call this.post', () => {
            let data = {
                name: 'test',
                pass: '123'
            };
            auth.companyLogin(data);

            chai.expect(auth.post).to.have.been.called.with
                .exactly('/company-login', data, {});
        });
    });

    describe('fbLogin', () => {
        it('should call this.post', () => {
            let data = {
                name: 'test',
                pass: '123'
            };
            auth.fbLogin(data);

            chai.expect(auth.post).to.have.been.called.with
                .exactly('/login/facebook', data, {});
        });
    });

    describe('register', () => {
        it('should call this.post', () => {
            auth.register();

            chai.expect(auth.post).to.have.been.called.with
                .exactly(`/user`, {}, {});
        });

        it('should call this.post', () => {
            let data = {
                name: 'test',
                email: 'test@test.com'
            };

            auth.register(data);

            chai.expect(auth.post).to.have.been.called.with
                .exactly(`/user`, data, {});
        });

        it('should call this.post with query params', () => {
            let data = {
                name: 'test',
                email: 'test@test.com'
            };

            auth.register(data, query);

            chai.expect(auth.post).to.have.been.called.with
                .exactly(`/user`, data, Object.assign(query, {}));
        });
    });

    describe('renewJWT', () => {
        it('should call this.get', () => {
            auth.renewJWT('test');

            chai.expect(auth.get).to.have.been.called.with
                .exactly('/login/renew-token', { usertoken: 'test' });
        });
    });

    describe('passwordStrength', () => {
        it('should call this.post', () => {
            auth.passwordStrength('password');

            chai.expect(auth.post).to.have.been.called.with
                .exactly(`/password`, { password: 'password' }, {});
        });
    });
});
