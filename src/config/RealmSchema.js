import Realm from 'realm';

class User extends Realm.Object{}
User.schema = {
    name: 'user',
    properties: {
        namalengkap: 'string',
        username: 'string',
        email: 'string',
        telepon: 'string',
        password: 'string'
    }
};

class Booking extends Realm.Object{}
Booking.schema = {
    name: 'booking',
    properties: {
        from: 'string',
        to: 'string',
        seatclass: 'string',
        departure: 'string',
        adult: 'string',
        child: 'string'
    }
};

export default new Realm({schema: [User, Booking], schemaVersion: 5});