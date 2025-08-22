export default class Validator {
    validateUsername(nickname) {
        if (!/^[a-zA-Z0-9-_]+$/.test(nickname)) {
            return false
        }

        if (/\d{4,}/.test(nickname)) {
            return false;
        }

        if (/^[\d\-_]/.test(nickname) || /[\d\-_]$/.test(nickname)) {
            return false;
        }

        return true;
    }
}