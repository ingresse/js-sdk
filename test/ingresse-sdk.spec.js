import chai from 'chai';
import IngresseSdk from '../src/ingresse-sdk';
import pack from '../package.json';

describe('IngresseSdk', () => {
    it('should instantiate the class', () => {
        let sdk = new IngresseSdk();
        chai.expect(sdk).to.be.an.instanceof(IngresseSdk);
    });

    it('should have static method version ' + pack.version, () => {
        chai.expect(IngresseSdk.version).to.be.an('function');
        chai.expect(IngresseSdk.version()).to.equal(pack.version);
    });

    it('should accept custom params for each api', () => {
        let sdk = new IngresseSdk({
            companyId: 4,
            ticket: {
                url: 'https://my.custom.ticket.url.com'
            }
        });

        chai.expect(sdk.ticket.settings.url).to.equal('https://my.custom.ticket.url.com');
        chai.expect(sdk.ticket.settings.auth).to.equal('Jwt');
    });

    it('should initializ only api that are defined in the api modules', () => {
        let sdk = new IngresseSdk({
            myTestApi: {
                url: 'https://this.dont.exist.com'
            }
        });

        chai.expect(sdk.myTestApi).to.be.undefined;
    });

    it('should accept a list of apis to use', () => {
        let sdk = new IngresseSdk({
            apis: [] // empty array will not initialize any api
        });

        // Ticket api should not be initialized
        chai.expect(sdk.ticket).to.be.undefined;

        let sdk2 = new IngresseSdk({
            apis: ['ticket']
        });

        chai.expect(sdk2.ticket).not.to.be.undefined;
    });

    it('should set custom url', () => {
        let sdk = new IngresseSdk();

        sdk.api.setUrl('test');

        chai.expect(sdk.api.settings.url).to.be.equal('test');
    });

    it('should set custom token', () => {
        let sdk = new IngresseSdk();

        chai.expect(sdk.ticket.auth.authData).to.be.equal('');

        sdk.ticket.auth.setToken('test');

        chai.expect(sdk.ticket.auth.authData).to.be.equal('test');
    });
});
