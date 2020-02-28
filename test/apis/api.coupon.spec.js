
import chai from 'chai';
import {ApiCoupon} from '../../src/apis/api.coupon';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);


describe('API Coupon', () => {
    let coupon, query, body;

    beforeEach(() => {
        coupon = new ApiCoupon();
        chai.spy.on(coupon, 'get');
        chai.spy.on(coupon, 'post');
        chai.spy.on(coupon, 'put');
        chai.spy.on(coupon, 'delete');
    });

    it('should instantiate the class', () => {
        chai.expect(coupon).to.be.an.instanceof(ApiCoupon);
        chai.expect(coupon).to.be.an.instanceof(RequestHandler);
    });

    describe('getCoupons', () => {
        it('should call this.get', () => {
            coupon.getCoupons();

            chai.expect(coupon.get).to.have.been.called.with
                .exactly('/coupons',{});
        });

        it('should call this.get with query params', () => {
            let query = {
                property: 'test',
            };

            coupon.getCoupons(query);

            chai.expect(coupon.get).to.have.been.called.with
                .exactly('/coupons', query);
        });
    });

    describe('getCoupon', () => {
        it('should call this.get', () => {
            let id = '1234-55555-6666';
            coupon.getCoupon(id);

            chai.expect(coupon.get).to.have.been.called.with
                .exactly(`/coupons/${id}`,{});
        });

        it('should call this.get with query params', () => {
            let id = '1234-55555-6666';
            let query = {
                property: 'test',
            };

            coupon.getCoupon(id, query);

            chai.expect(coupon.get).to.have.been.called.with
                .exactly(`/coupons/${id}`, query);
        });
    });

    describe('createCoupon', () => {
        it('should call this.post', () => {
            let id = '1234-55555-6666';

            coupon.createCoupon(body, query);

            chai.expect(coupon.post).to.have.been.called.with
                .exactly('/coupons', body, {});
        });

        it('should call this.post with query params', () => {
            let id = '1234-55555-6666';
            let query = {
                property: 'test',
            };

            coupon.createCoupon(body, query);

            chai.expect(coupon.post).to.have.been.called.with
                .exactly('/coupons', body, query);
        });
    });

    describe('updateCoupon', () => {
        it('should call this.put', () => {
            let id = '1234-55555-6666';

            coupon.updateCoupon(id, body, query);

            chai.expect(coupon.put).to.have.been.called.with
                .exactly(`/coupons/${id}`, body, {});
        });

        it('should call this.put with query params', () => {
            let id = '1234-55555-6666';
            let query = {
                property: 'test',
            };

            coupon.updateCoupon(id, body, query);

            chai.expect(coupon.put).to.have.been.called.with
                .exactly(`/coupons/${id}`, body, query);
        });
    });

    describe('deleteCoupon', () => {
        it('should call this.delete', () => {
            let id = '1234-55555-6666';

            coupon.deleteCoupon(id, query);

            chai.expect(coupon.delete).to.have.been.called.with
                .exactly(`/coupons/${id}`, {});
        });

        it('should call this.delete with query params', () => {
            let id = '1234-55555-6666';
            let query = {
                property: 'test',
            };

            coupon.deleteCoupon(id, query);

            chai.expect(coupon.delete).to.have.been.called.with
                .exactly(`/coupons/${id}`, query);
        });
    });
});
