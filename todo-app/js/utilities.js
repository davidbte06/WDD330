const utilities = {
    qs: (elementDOM) => {
        let query = document.querySelectorAll(elementDOM)
        return query.length > 1 ? query : query[0];
    },

    onTouch: (element, fallback) => {
        if (element.ontouchend === undefined) {
            element.addEventListener('click', fallback);
        } else {
            element.addEventListener('touchend', fallback);
        }
    }
}

export default utilities;