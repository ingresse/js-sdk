import {Jwt} from './jwt';
import {Ingresse} from './ingresse';


export var auth = {
    [Jwt.type()]: Jwt,
    [Ingresse.type()]: Ingresse
};

