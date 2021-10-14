const insideFn = logger => {
    logger("They can be sent to other functions as arguments");
}

const logger = message => console.log(message);

insideFn(message => console.log(message));
insideFn(logger);

const createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + '!!!');
    }
}

const scream = createScream(message => console.log(message));
scream('function can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');

const createScreamArrowVersion = logger => message => {
    logger(message.toUpperCase() + '!!!');
}

const screamArrowVersion = createScreamArrowVersion(message => console.log(message));
screamArrowVersion('function can be returned from other functions');
screamArrowVersion('createScream returns a function');
screamArrowVersion('scream invokes that returned function');