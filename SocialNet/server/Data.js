class Data {
    constructor() {
        this.users = new Map();
        this.friends = new Map();
    }

    addUser(email, password) {
        if (this.users.has(email)) {
            return false;
        }
        this.users.set(email, password);
        this.friends.set(email, []);
        return true;
    }

    addFriends(email1, email2) {
        if (this.friends.has(email1) && this.friends.has(email2)) {
            this.friends.set(email1, [...this.friends.get(email1), email2]);
            this.friends.set(email2, [...this.friends.get(email2), email1]);
            return true;
        }
        return false;
    }

    reply(email, password) {
        if (this.users.has(email)) {
            if (this.users.get(email) === password) {
                return 1;
            }
            else {
                return 2;
            }
        }
        return 3;
    }
}

module.exports = Data;