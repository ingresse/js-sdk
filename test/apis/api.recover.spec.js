
import chai from 'chai';
import {ApiRecover} from '../../src/apis/api.recover';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);


describe('API Recover Password', () => {
    let recover;

    beforeEach(() => {
        recover = new ApiRecover();
        chai.spy.on(recover, 'post');
    });

    it('should instantiate the class', () => {
        chai.expect(recover).to.be.an.instanceof(ApiRecover);
        chai.expect(recover).to.be.an.instanceof(RequestHandler);
    });

    describe('recoverPassword', () => {
        it('should call this.post', () => {
            let data = {
                email: 'test@test.com'
            };
            recover.recoverPassword(data);

            chai.expect(recover.post).to.have.been.called.with
                .exactly('/recover/password', data, {});
        });
    });

    describe('validateHash', () => {
        it('should call this.post', () => {
            let data = {
                email: 'test@test.com'
            };
            recover.validateHash(data);

            chai.expect(recover.post).to.have.been.called.with
                .exactly('/recover/validate-hash', data, {});
        });
    });

    describe('update', () => {
        it('should call this.post', () => {
            let data = {
                email: 'test@test.com'
            };
            recover.update(data);

            chai.expect(recover.post).to.have.been.called.with
                .exactly('/recover/update-password', data, {});
        });
    });
});

