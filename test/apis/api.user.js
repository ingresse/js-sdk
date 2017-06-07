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
        chai.spy.on(user, 'get');
        chai.spy.on(user, 'post');
    });

    it('should instantiate the class', () => {
        chai.expect(user).to.be.an.instanceof(ApiUser);
    });
});

