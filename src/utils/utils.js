
export const setPage = (page) => {
    document.title = `Madame’s Café - ${page}`;
}

export const scrollToTop = () => {
    window.scroll({top: 0})
}

export const validate = (formData) => {
    return Object.values(formData).find(value => value === '');
}