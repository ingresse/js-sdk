import chai from 'chai';
import {ApiAuth} from '../../src/apis/api.auth';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);


describe('API Auth', () => {
    let auth;

    beforeEach(() => {
        auth = new ApiAuth();
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
});

