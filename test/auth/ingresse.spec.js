import chai from 'chai';
import IngresseSdk from '../../src/ingresse-sdk';
import pack from '../../package.json';

describe('"Ingresse" Auth', () => {
    it('should set custom token', () => {
        let sdk = new IngresseSdk();

        sdk.api.auth.setToken('test');

        chai.expect(sdk.api.settings.auth).to.equal('Ingresse');
        chai.expect(sdk.api.auth.authData.userToken).to.equal('test');
    });

    it('should set API auth keys', () => {
        const sdk        = new IngresseSdk();
        const apiKey     = 'my-app-key-test';
        const privateKey = apiKey.concat('-private');

        sdk.api.auth.setPublicKey(apiKey);
        sdk.api.auth.setPrivateKey(privateKey);

        chai.expect(sdk.api.auth.authData.apiKey).to.equal(apiKey);
        chai.expect(sdk.api.auth.authData.privateKey).to.equal(privateKey);
    });

    it('should validate API auth settings', () => {
        const sdk = new IngresseSdk();

        chai.expect(sdk.api.auth.getSettings()).to.eql({
            query: {
                apikey: '',
                usertoken: ''
            }
        });

        sdk.api.auth.setToken('')
    });

    describe('custom options', () => {
        let sdk, apiKey, signature, timestamp, token;

        beforeEach(() => {
            sdk       = new IngresseSdk();
            apiKey    = 'my-app-key-test';
            signature = 'signature-generated-before';
            timestamp = '2018-03-14T16:10:13Z';
            token     = '12345-test';
        });

        it('should not set any settings', () => {
            sdk.api.auth.setAuth();

            chai.expect(sdk.api.auth.authData.apiKey).to.equal('');
            chai.expect(sdk.api.auth.authData.signature).to.not.be.defined;
            chai.expect(sdk.api.auth.authData.timestamp).to.not.be.defined;
            chai.expect(sdk.api.auth.authData.userToken).to.equal('');
        });

        it('should set API auth custom options', () => {
            sdk.api.auth.setAuth(timestamp, signature);

            chai.expect(sdk.api.auth.authData.apiKey).to.equal('');
            chai.expect(sdk.api.auth.authData.signature).to.equal(signature);
            chai.expect(sdk.api.auth.authData.timestamp).to.equal(timestamp);
            chai.expect(sdk.api.auth.authData.userToken).to.equal('');
        });

        it('should set API auth custom options, with apiKey', () => {
            sdk.api.auth.setAuth(timestamp, signature, apiKey);

            chai.expect(sdk.api.auth.authData.apiKey).to.equal(apiKey);
            chai.expect(sdk.api.auth.authData.signature).to.equal(signature);
            chai.expect(sdk.api.auth.authData.timestamp).to.equal(timestamp);
            chai.expect(sdk.api.auth.authData.userToken).to.equal('');
        });

        it('should set API auth custom options, with apiKey and token', () => {
            sdk.api.auth.setAuth(timestamp, signature, apiKey);
            sdk.api.auth.setToken(token);

            chai.expect(sdk.api.auth.authData.apiKey).to.equal(apiKey);
            chai.expect(sdk.api.auth.authData.signature).to.equal(signature);
            chai.expect(sdk.api.auth.authData.timestamp).to.equal(timestamp);
            chai.expect(sdk.api.auth.authData.userToken).to.equal(token);
        });

        describe('@DEPRECATED', () => {
            it('should "getPublicKey" call "getApiKey"', () => {
                const spy = chai.spy.on(sdk.api.auth, 'getApiKey');

                sdk.api.auth.getPublicKey();

                chai.expect(spy).to.have.been.called();
            });

            it('should privateKey not be defined', () => {
                chai.expect(sdk.api.auth.getPrivateKey()).to.not.be.defined;
            });

            it('should set privateKey', () => {
                sdk.api.auth.setPrivateKey(apiKey);

                chai.expect(sdk.api.auth.getPrivateKey()).to.equal(apiKey);
            });
        });
    });
});
