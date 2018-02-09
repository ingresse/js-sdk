
import chai from 'chai';
import {Event} from '../../src/apis/event';
import {RequestHandler} from '../../src/request/handler';
import {auth} from '../../src/auth';
import spies from 'chai-spies';

chai.use(spies);


describe('Event API', () => {
    it('should instantiate the class', () => {
        let event = new Event();

        chai.expect(event).to.be.an.instanceof(Event);
        chai.expect(event).to.be.an.instanceof(RequestHandler);
    });

    it('should have default settings', () => {
        let event = new Event();

        chai.expect(event.settings).to.be.an('object');
        chai.expect(event.settings.url).to.equal('https://event.ingresse.com');
        chai.expect(event.settings.auth).to.equal(auth.Jwt.type());
    });

    it('should accept custom settings', () => {
        let event = new Event({
            url: 'https://my.custom.event.url.com'
        });

        chai.expect(event.settings.url).to.equal('https://my.custom.event.url.com');
    });

    it('should have default methods', () => {
        let event = new Event();

        chai.expect(event.getById).not.to.be.undefined;
        chai.expect(event.getById).to.be.a('function');

        chai.expect(event.getAttributes).not.to.be.undefined;
        chai.expect(event.getAttributes).to.be.a('function');

        chai.expect(event.create).not.to.be.undefined;
        chai.expect(event.create).to.be.a('function');

        chai.expect(event.update).not.to.be.undefined;
        chai.expect(event.update).to.be.a('function');

        chai.expect(event.updatePoster).not.to.be.undefined;
        chai.expect(event.updatePoster).to.be.a('function');

        chai.expect(event.deletePoster).not.to.be.undefined;
        chai.expect(event.deletePoster).to.be.a('function');

        chai.expect(event.updateAttributes).not.to.be.undefined;
        chai.expect(event.updateAttributes).to.be.a('function');

        chai.expect(event.validateSlug).not.to.be.undefined;
        chai.expect(event.validateSlug).to.be.a('function');

        chai.expect(event.getCategories).not.to.be.undefined;
        chai.expect(event.getCategories).to.be.a('function');

        chai.expect(event.getPrivateCategories).not.to.be.undefined;
        chai.expect(event.getPrivateCategories).to.be.a('function');

        chai.expect(event.getCategory).not.to.be.undefined;
        chai.expect(event.getCategory).to.be.a('function');

        chai.expect(event.deleteCategory).not.to.be.undefined;
        chai.expect(event.deleteCategory).to.be.a('function');

        chai.expect(event.deleteSession).not.to.be.undefined;
        chai.expect(event.deleteSession).to.be.a('function');
    });

    describe('getById', () => {
        let event;
        let id = 1;

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'get');
        });

        it('should getById call this.get', () => {
            event.getById(id);

            chai.expect(event.get).to.have.been.called.with.exactly(`/${id}`, {});
        });

        it('should getById call this.get and accept query argument', () => {
            event.getById(id, {limit: 10});

            chai.expect(event.get).to.have.been.called.with.exactly(`/${id}`, {limit: 10});
        });
    });

    describe('getAttributes', () => {
        let event;
        let id = 1;

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'get');
        });

        it('should getAttributes call this.get', () => {
            event.getAttributes(id);

            chai.expect(event.get).to.have.been.called.with.exactly(`/${id}/attributes`, {});
        });

        it('should getAttributes call this.get and accept query argument', () => {
            event.getAttributes(id, {limit: 10});

            chai.expect(event.get).to.have.been.called.with.exactly(`/${id}/attributes`, {limit: 10});
        });
    });

    describe('create', () => {
        let event;
        let data = {};
        let query = {test: 'test'};
        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'post');
        });

        it('should create call this.post without data', () => {
            event.create();

            chai.expect(event.post).to.have.been.called.with.exactly('/', data, {});
        });


        it('should create call this.post', () => {
            data = {
                id: 1,
                description: 'aaaaaa'
            };

            event.create(data);

            chai.expect(event.post).to.have.been.called.with.exactly('/', data, {});
        });

        it('should create call this.post and accept query argument', () => {
            data = {
                id: 1,
                description: 'aaaaaa'
            };

            event.create(data, query);

            chai.expect(event.post).to.have.been.called.with.exactly('/', data, query);
        });
    });

    describe('update', () => {
        let event;
        let id = 1;
        let data = {};
        let query = {test: 'test'};
        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'put');
        });

        it('should update call this.put without data', () => {
            event.update(id);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}`, data, {});
        });

        it('should update call this.put', () => {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.update(id, data);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}`, data, {});
        });

        it('should update call this.put and accept query argument', () => {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.update(id, data, query);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}`, data, query);
        });
    });

    describe('updatePoster', () => {
        let event;
        let id = 1;
        let data = {};
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'put');
        });

        it('should updatePoster call this.put without data', () => {
            event.updatePoster(id);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}/poster`, data, {});
        });

        it('should updatePoster call this.put', () => {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updatePoster(id, data);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}/poster`, data, {});
        });

        it('should updatePoster call this.put and accept query argument', () => {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updatePoster(id, data, query);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}/poster`, data, query);
        });
    });

    describe('deletePoster', () => {
        let event;
        let id = 1;
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'delete');
        });

        it('should deletePoster call this.delete', () => {
            event.deletePoster(id);

            chai.expect(event.delete).to.have.been.called.with.exactly(`/${id}/poster`, {});
        });

        it('should deletePoster call this.put and accept query argument', () => {
            event.deletePoster(id, query);

            chai.expect(event.delete).to.have.been.called.with.exactly(`/${id}/poster`, query);
        });
    });

    describe('updateAttributes', () => {
        let event;
        let id = 1;
        let data = {};
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'put');
        });

        it('should updateAttributes call this.put without', () => {
            event.updateAttributes(id);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}/attributes`, data, {});
        });

        it('should updateAttributes call this.put', () => {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updateAttributes(id, data);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}/attributes`, data, {});
        });

        it('should updateAttributes call this.put and accept query argument', () => {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updateAttributes(id, data, query);

            chai.expect(event.put).to.have.been.called.with.exactly(`/${id}/attributes`, data, query);
        });
    });

    describe('validateSlug', () => {
        let event;
        let slug = 'test';
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'get');
        });

        it('should validateSlug call this.get', () => {
            event.validateSlug(slug);

            chai.expect(event.get).to.have.been.called.with.exactly(`/slugs/${slug}`, {});
        });

        it('should validateSlug call this.get and accept query argument', () => {
            event.validateSlug(slug, query);

            chai.expect(event.get).to.have.been.called.with.exactly(`/slugs/${slug}`, query);
        });
    });

    describe('getCategories', () => {
        let event;
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'get');
        });

        it('should getCategories call this.get', () => {
            event.getCategories();

            chai.expect(event.get).to.have.been.called.with.exactly('/categories', {});
        });

        it('should getCategories call this.get and accept query argument', () => {
            event.getCategories(query);

            chai.expect(event.get).to.have.been.called.with.exactly('/categories', query);
        });
    });

    describe('getPrivateCategories', () => {
        let event;
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'get');
        });

        it('should getPrivateCategories call this.get', () => {
            event.getPrivateCategories();

            chai.expect(event.get).to.have.been.called.with.exactly('/categories/private', {});
        });

        it('should getPrivateCategories call this.get and accept query argument', () => {
            event.getPrivateCategories(query);

            chai.expect(event.get).to.have.been.called.with.exactly('/categories/private', query);
        });
    });

    describe('getCategory', () => {
        let event;
        let id = 1;
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'get');
        });

        it('should getCategory call this.get', () => {
            event.getCategory(id);

            chai.expect(event.get).to.have.been.called.with.exactly(`/categories/${id}`, {});
        });

        it('should getCategory call this.get and accept query argument', () => {
            event.getCategory(id, query);

            chai.expect(event.get).to.have.been.called.with.exactly(`/categories/${id}`, query);
        });
    });

    describe('deleteCategory', () => {
        let event;
        let id = 1;
        let categoryId = 2;
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'delete');
        });

        it('should deleteCategory call this.delete', () => {
            event.deleteCategory(id, categoryId);

            chai.expect(event.delete).to.have.been.called.with.exactly(`/${id}/category/${categoryId}`, {});
        });

        it('should deleteCategory call this.delete and accept query argument', () => {
            event.deleteCategory(id, categoryId, query);

            chai.expect(event.delete).to.have.been.called.with.exactly(`/${id}/category/${categoryId}`, query);
        });
    });

    describe('deleteSession', () => {
        let event;
        let id = 1;
        let sessionId = 2;
        let query = {test: 'test'};

        beforeEach(() => {
            event = new Event();
            chai.spy.on(event, 'delete');
        });

        it('should deleteSession call this.delete', () => {
            event.deleteSession(id, sessionId);

            chai.expect(event.delete).to.have.been.called.with.exactly(`/${id}/sessions/${sessionId}`, {});
        });

        it('should deleteSession call this.delete and accept query argument', () => {
            event.deleteSession(id, sessionId, query);

            chai.expect(event.delete).to.have.been.called.with.exactly(`/${id}/sessions/${sessionId}`, query);
        });
    });
});
